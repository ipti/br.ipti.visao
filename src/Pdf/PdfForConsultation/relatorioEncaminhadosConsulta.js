import { SaveAlt } from "@material-ui/icons";
import React, { useEffect, useRef, useState } from "react";
import logo from "../../assets/images/logo.svg";

import { Column, Padding, Row } from "../../styles/style";
import { Table, TableData, TableHeader, TableWrapper } from "../style";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import api from "../../services/api";
import { Pagination, Typography } from "@mui/material";

import pdfMake from "pdfmake/build/pdfmake";
import "pdfmake/build/vfs_fonts";

const MyDocument = () => {
  const contentRef = useRef(null);

  const [report, setReport] = useState([]);
  const [isFetching, setIsFetching] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const generatePDF = () => {
    const tableHeaders = [
      { text: "Nº", style: "tableHeader" },
      { text: "Nome da escola", style: "tableHeader" },
      { text: "Turma", style: "tableHeader" },
      { text: "Nome do Estudante", style: "tableHeader" },
      { text: "Data de Nascimento", style: "tableHeader" },
      { text: "Prioridade", style: "tableHeader" },
    ];

    const tableBody = report.map((item, index) => [
      { text: index + 1, style: "tableRow" },
      { text: item.school, style: "tableRow" },
      { text: item.classroom, style: "tableRow" },
      { text: item.student_name, style: "tableRow" },
      { text: item.birthday, style: "tableRow" },
      {
        text: item.points < 5 ? "Mínima" : item.points < 9 ? "Média" : "Máxima",
        style: "tableRow",
      },
    ]);

    const documentDefinition = {
      content: [
        {
          text: "Relatório de Estudantes para Consulta - Lupa",
          style: "header",
        },
        {
          table: {
            headerRows: 1,
            widths: ["auto", "*", "auto", "*", "auto", "auto"],
            body: [tableHeaders, ...tableBody],
          },
          layout: {
            fillColor: (rowIndex) =>
              rowIndex === 0 ? null : rowIndex % 2 === 0 ? "#F0F0F0" : null,
            hLineWidth: () => 0.5,
            vLineWidth: () => 0.5,
            hLineColor: () => "#CCCCCC",
            vLineColor: () => "#CCCCCC",
          },
        },
      ],
      styles: {
        header: {
          fontSize: 18,
          bold: true,
          marginBottom: 20,
          alignment: "center",
        },
        tableHeader: {
          bold: true,
          fontSize: 12,
          color: "white",
          fillColor: "#0077B6",
          alignment: "center",
          margin: 5,
        },
        tableRow: {
          color: "black",
          fontSize: 10,
        },
      },
      footer: (currentPage, pageCount) => ({
        text: `Página ${currentPage} de ${pageCount}`,
        alignment: "center",
        fontSize: 10,
        margin: [0, 10, 0, 0],
      }),
    };

    pdfMake
      .createPdf(documentDefinition)
      .download("RelatorioEncaminhadosParaConsulta-Lupa.pdf");
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

  const totalPages = Math.ceil(report.length / itemsPerPage);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = report.slice(indexOfFirstItem, indexOfLastItem);

  const handleChangePage = (event, value) => {
    setCurrentPage(value);
  };

  return (
    <div style={{ width: "100%" }}>
      <Padding padding="32px 16px">
        <button
          style={{ padding: "8px", cursor: "pointer" }}
          onClick={() => generatePDF()}
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
                    currentItems.map((item, index) => (
                      <tr key={index}>
                        <TableData style={{ textAlign: "center" }}>
                          {indexOfFirstItem + index + 1}
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
            <Row
              id="center"
              style={{
                marginTop: "16px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography style={{ marginBottom: "8px" }}>
                Página: {currentPage}
              </Typography>
              <Pagination
                count={totalPages}
                shape="rounded"
                page={currentPage}
                onChange={handleChangePage}
              />
            </Row>
          </div>
        </Padding>
      </div>
    </div>
  );
};

export default MyDocument;
