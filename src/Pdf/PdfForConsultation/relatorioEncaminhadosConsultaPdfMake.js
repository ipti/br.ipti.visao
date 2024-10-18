import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import logo from "../../assets/images/logo.svg";

import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
import { TDocumentDefinitions } from "pdfmake/interfaces";

pdfMake.vfs = pdfFonts.pdfMake.vfs;

const RelatorioEncaminhadosConsultaPdfMake = () => {
  const { id } = useParams();

  const [report, setReport] = useState([]);

  useEffect(() => {
    const callFunction = async () => {
      try {
        const result = await api.get(
          "https://us-central1-br-ipti-visao.cloudfunctions.net/consultationReport"
        );
        setReport(result.data);
      } catch (error) {
        console.error("Error calling function:", error);
      } finally {
        setIsFetching(false);
      }
    };
    callFunction();
  }, []);

  const generatePDF = () => {
    const maxReportPerPage = 10;
    const maxStudentsPerPage = 20;

    const createTableBody = () => {
      const headerRow = [
        "Nome da escola",
        "Turma",
        "Nome do Estudante",
        "Prioridade",
      ];

      const bodyRows = report.map((student, index) => [
        index + 1,
        student.school,
        student.classroom,
        student.student_name,
        student.points < 5
          ? "Prioridade minima"
          : student.points >= 5 && item.points < 9
          ? "Prioridade média"
          : student.points >= 10
          ? "Prioridade máxima"
          : "",
      ]);

      return [headerRow, ...bodyRows];
    };

    const splitStudentsIntoPages = () => {
      const studentPages = [];
      const totalStudents = bodyRows?.student.length || 0;

      for (let i = 0; i < totalStudents; i += maxStudentsPerPage) {
        studentPages.push(bodyRows?.student.slice(i, i + maxStudentsPerPage));
      }

      return studentPages;
    };

    const studentPages = splitStudentsIntoPages();

    const content = [
      {
        text: "Relatório Estudantes Encaminhados para Consulta - Lupa",
        style: "header",
        alignment: "center",
        bold: true,
        marginTop: 20,
      },
      {
        table: {
          headerRows: 1,
          widths: ["auto", "*", "*", "*", "*"],
          body: createTableBody(),
        },
      },
    ];

    const docDefinition = {
      pageOrientation: "landscape",
      content,
      styles: {
        header: {
          fontSize: 18,
          bold: true,
          alignment: "center",
          marginTop: 20,
        },
      },

      header(currentPage, pageCount) {
        return {
          text: `Página ${currentPage.toString()} de ${pageCount}`,
          alignment: "center",
          margin: [0, 10, 0, 0],
        };
      },

      pageMargins: [40, 100, 40, 60],
      
      background: (currentPage,pageCount) => {
        if (currentPage > 1) {
          return {
            image: logo,
            width: 200,
            height: 200,
            absolutePosition: { x: 200, y: 300 },
          };
        }
        return {
            text: "testando se entrou no if",
            image: logo,
            width: 200,
            height: 200,
            absolutePosition: { x: 200, y: 300 },
        }

    };

    pdfMake.createPdf(docDefinition).open();
  };

};
