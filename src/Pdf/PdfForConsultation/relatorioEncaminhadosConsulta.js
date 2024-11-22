import { SaveAlt } from "@material-ui/icons";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import React, { useEffect, useRef, useState } from "react";
import logo from "../../assets/images/logo.svg";

import { Column, Padding, Row } from "../../styles/style";
import { Table, TableData, TableHeader, TableWrapper } from "../style";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import api from "../../services/api";

// Create Document Component
const MyDocument = () => {
  const contentRef = useRef(null);

  const [report, setReport] = useState([]);
  const [isFetching, setIsFetching] = useState(true);

  const generatePDF = () => {
    if (!contentRef.current) return;

    const elementToCapture = contentRef.current;

    html2canvas(elementToCapture).then((canvas) => {
        const pdf = new jsPDF('p', 'mm', 'a4');
        const imgData = canvas.toDataURL('image/png');

        // Configuração para o tamanho do PDF
        const pdfWidth = 210; 
        const pdfHeight = 297; 
        const imgWidth = pdfWidth;
        const imgHeight = (canvas.height * imgWidth) / canvas.width;

        let heightLeft = imgHeight;
        let position = 0;
        let page = 1;

        // Função para desenhar cabeçalho
        const drawHeader = (pageNumber) => {
            pdf.setFontSize(12);
            pdf.text('Relatório: Estudantes para Consulta', 10, 10); // Título no cabeçalho
            pdf.setFontSize(10);
            pdf.text(`Página ${pageNumber}`, 200, 10, { align: 'right' }); // Número da página
            pdf.line(10, 15, 200, 15); // Linha separadora
        };

        // Adiciona a primeira página (sem cabeçalho)
        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pdfHeight;

        // Adiciona páginas adicionais com cabeçalho, se necessário
        while (heightLeft > 0) {
            position -= pdfHeight; // Move para a próxima página
            pdf.addPage();
            page++; // Incrementa número da página

            drawHeader(page); // Adiciona cabeçalho apenas a partir da segunda página
            pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
            heightLeft -= pdfHeight;
        }

        pdf.save('RelatorioEncaminhadosParaConsulta-Lupa.pdf');
    });
};


  useEffect(() => {
    const callFunction = async () => {
      try {
        const result = await api.get("/consultationReport");
        setReport(result.data);
      } catch (error) {
        console.error("Error calling function:", error);
      } finally {
        setIsFetching(false);
      }
    };
    callFunction();
  }, []);

  return (
    <div style={{ width: "100%" }}>
      <Padding padding="32px 16px">
        <button
          style={{ padding: "8px", cursor: "pointer" }}
          onClick={generatePDF}
        >
          <Row>
            <SaveAlt />{" "}
            <h3 style={{ padding: "0 4px", margin: 0, color: "#000" }}>
              Gerar PDF
            </h3>
          </Row>
        </button>
      </Padding>
      <div ref={contentRef}>
        <Padding padding="16px">
          <Column>
            <Row id="space-between">
              <Column>
                <h1 style={{ padding: "0 4px", margin: 0, color: "#000" }}>
                  Lupa : Relatório de Estudantes para Consulta{" "}
                </h1>
                <Padding />
              </Column>
              <Column id="center">
                <Row id="center">
                  <img
                    style={{ width: "256px", padding: "8px 16px" }}
                    alt="Logotipo Lupa"
                    src={logo}
                  />
                </Row>
              </Column>
            </Row>
          </Column>

          <Padding padding="8px" />
          <div style={{ backgroundColor: "black", height: "1px" }}></div>
          <Column>
            <Row id="center">
              <h1 style={{ padding: "0px" }}>
                Relatório Estudantes Encaminhados para Consulta - Lupa{" "}
              </h1>
            </Row>
          </Column>
          <div>
            <TableWrapper>
              <Table>
                <thead>
                  <tr>
                    <TableHeader style={{ textAlign: "center" }}>
                      Nº
                    </TableHeader>
                    <TableHeader style={{ textAlign: "center" }}>
                      Nome da escola
                    </TableHeader>
                    <TableHeader style={{ textAlign: "center" }}>
                      Turma
                    </TableHeader>
                    <TableHeader style={{ textAlign: "center" }}>
                      Nome do Estudante
                    </TableHeader>
                    <TableHeader style={{ textAlign: "center" }}>
                      Data de Nascimento
                    </TableHeader>
                    <TableHeader style={{ textAlign: "center" }}>
                      Prioridade
                    </TableHeader>
                  </tr>
                </thead>
                <tbody>
                  {isFetching ? (
                    // Mostrar Skeleton enquanto os dados estão sendo carregados
                    <tr>
                      <TableData>
                        <Skeleton height={20} />
                      </TableData>
                      <TableData>
                        <Skeleton height={20} />
                      </TableData>
                      <TableData>
                        <Skeleton height={20} />
                      </TableData>
                      <TableData>
                        <Skeleton height={20} />
                      </TableData>
                      <TableData>
                        <Skeleton height={20} />
                      </TableData>
                      <TableData>
                        <Skeleton height={20} />
                      </TableData>
                    </tr>
                  ) : (
                    // Renderizar os dados do relatório
                    report.map((item, index) => (
                      <tr key={index}>
                        <TableData style={{ textAlign: "center" }}>
                          {index + 1}
                        </TableData>
                        <TableData style={{ textAlign: "center" }}>
                          {item.school}
                        </TableData>
                        <TableData style={{ textAlign: "center" }}>
                          {item.classroom}
                        </TableData>
                        <TableData style={{ textAlign: "center" }}>
                          {item.student_name}
                        </TableData>
                        <TableData style={{ textAlign: "center" }}>
                          {item.birthday}
                        </TableData>
                        <TableData style={{ textAlign: "center" }}>
                          {item.points < 5
                            ? "Prioridade minima"
                            : item.points >= 5 && item.points < 9
                            ? "Prioridade média"
                            : item.points >= 10
                            ? "Prioridade máxima"
                            : ""}
                        </TableData>
                      </tr>
                    ))
                  )}
                </tbody>
              </Table>
            </TableWrapper>
          </div>
        </Padding>
      </div>
    </div>
  );
};
export default MyDocument;
