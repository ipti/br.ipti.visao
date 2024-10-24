import { SaveAlt } from "@material-ui/icons";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import logo from "../../assets/images/logo.svg";
import fetchOneRegistration from "../../controller/registration/fetchOneRegistration";
import { Column, Padding, Row } from "../../styles/style";
import { Table, TableData, TableHeader, TableWrapper } from "../style";
import "./style.css";

const MyDocument = () => {
  const contentRef = useRef(null);
  const { idRegistration } = useParams();
  const [students, setStudents] = useState();

  const generatePDF = () => {
    if (!contentRef.current) return;

    const elementToCapture = contentRef.current;

    html2canvas(elementToCapture).then((canvas) => {
      const pdf = new jsPDF("p", "mm", "a4");

      const margin = 10;
      const pageWidth = 210; // Largura da página A4 em mm

      const imgWidth = pageWidth - 2 * margin;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      const imgData = canvas.toDataURL("image/png");

      // Adiciona a imagem com 1 cm de margem em todos os lados
      pdf.addImage(imgData, "PNG", margin, margin, imgWidth, imgHeight);

      pdf.save(`ProntuarioMedico-${students.object.name}-Lupa.pdf`);
    });
  };

  useEffect(() => {
    fetchOneRegistration(idRegistration)
      .then((testDataList) => {
        setStudents(testDataList);
      })
      .catch((err) => {
        // Trate erros, se ocorrerem
        console.error(err);
      });
  }, [idRegistration]);

  function formatarDataHora() {
    const agora = new Date();
    const dia = agora.getDate().toString().padStart(2, "0");
    const mes = (agora.getMonth() + 1).toString().padStart(2, "0"); // Lembre-se de que os meses são baseados em zero
    const ano = agora.getFullYear();
    const hora = agora.getHours().toString().padStart(2, "0");
    const minutos = agora.getMinutes().toString().padStart(2, "0");

    return `${dia}/${mes}/${ano} - ${hora}:${minutos}h`;
  }

  return (
    <div className="print-container">
      <Padding padding="32px 16px">
        <button
          style={{ padding: "8px", cursor: "pointer" }}
          onClick={generatePDF}
        >
          <Row>
            <SaveAlt />
            <h3 style={{ padding: "0 4px", margin: 0, color: "#000" }}>
              Gerar PDF
            </h3>
          </Row>
        </button>
      </Padding>
      <div ref={contentRef}>
        <Padding padding="14px">
          <Column>
            <Row id="space-between">
              <Column>
                <h1 style={{ padding: "0 4px", margin: 0, color: "#000" }}>
                  Nome: {students?.object.name}
                </h1>
                <Padding />
                <h2 style={{ padding: "0 4px", margin: 0, color: "#000" }}>
                  Data de Nascimento: {students?.object.birthday}
                </h2>
                <Padding />
                <h2 style={{ padding: "0 4px", margin: 0, color: "#000" }}>
                  Data da consulta: {students?.object.dataConsulta}
                </h2>
                <Padding />
                <h2 style={{ padding: "0 4px", margin: 0, color: "#000" }}>
                  {" "}
                  CRM: {students?.object.crmMedico} &nbsp;&nbsp;&nbsp; Médico:{" "}
                  {students?.object.nomeMedico} &nbsp;&nbsp;&nbsp; Ass.:{" "}
                </h2>
              </Column>
              <Column id="center">
                <Row id="center">
                  <img
                    style={{ width: "256px", padding: "8px 16px" }}
                    alt=""
                    src={logo}
                  />
                </Row>
              </Column>
            </Row>
          </Column>

          <div style={{ backgroundColor: "black", height: "1px" }}></div>
          <Column>
            <Row id="center">
              <h1 style={{ padding: "0px" }}>Prontuário Médico </h1>
            </Row>
          </Column>
          <div>
            <h2>Escaneamento Visual pelo Spot Vision</h2>
            <TableWrapper>
              <Table>
                <thead>
                  <tr>
                    <TableHeader></TableHeader>
                    <TableHeader style={{ textAlign: "center" }}>
                      Refração Esférico
                    </TableHeader>
                    <TableHeader style={{ textAlign: "center" }}>
                      Refração Cilíndrico
                    </TableHeader>
                    <TableHeader style={{ textAlign: "center" }}>
                      Refração Eixo
                    </TableHeader>
                    <TableHeader style={{ textAlign: "center" }}>
                      Refração Equivalente Esférico
                    </TableHeader>
                    <TableHeader style={{ textAlign: "center" }}>
                      Refração DP
                    </TableHeader>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <TableData style={{ width: "120px", whiteSpace: "nowrap" }}>
                      Olho direito
                    </TableData>
                    <TableData style={{ textAlign: "center" }}>
                      {students?.object.refracaoEsfericoOlhoDireito}
                    </TableData>
                    <TableData style={{ textAlign: "center" }}>
                      {students?.object.refracaoCilindricoOlhoDireito}
                    </TableData>
                    <TableData style={{ textAlign: "center" }}>
                      {students?.object.refracaoEixoOlhoDireito}
                    </TableData>
                    <TableData style={{ textAlign: "center" }}>
                      {students?.object.refracaoEquivalenteEsfericoOlhoDireito}
                    </TableData>
                    <TableData style={{ textAlign: "center" }}>
                      {students?.object.refracaoDpOlhoDireito}
                    </TableData>
                  </tr>
                  <tr>
                    <TableData style={{ width: "120px", whiteSpace: "nowrap" }}>
                      Olho esquerdo
                    </TableData>
                    <TableData style={{ textAlign: "center" }}>
                      {students?.object.refracaoEsfericoOlhoEsquerdo}
                    </TableData>
                    <TableData style={{ textAlign: "center" }}>
                      {students?.object.refracaoCilindricoOlhoEsquerdo}
                    </TableData>
                    <TableData style={{ textAlign: "center" }}>
                      {students?.object.refracaoEixoOlhoEsquerdo}
                    </TableData>
                    <TableData style={{ textAlign: "center" }}>
                      {students?.object.refracaoEquivalenteEsfericoOlhoEsquerdo}
                    </TableData>
                    <TableData style={{ textAlign: "center" }}>
                      {students?.object.refracaoDpOlhoEsquerdo}
                    </TableData>
                  </tr>
                </tbody>
              </Table>
            </TableWrapper>

            <Padding padding="4px" />
            <Column
              style={{
                display: "flex",
                alignItems: "flex-start",
                marginBottom: "10px",
              }}
            >
              <h2 style={{ margin: 0, marginBottom: "2px" }}>
                Observações encontradas no Spot Vision:
              </h2>
              <div>
                {students?.object.observacoesSpotVision ? (
                  (() => {
                    const observacoes = students.object.observacoesSpotVision;
                    const fields = [
                      { key: "miopiaOd", label: "Miopia Olho Direito" },
                      { key: "miopiaOs", label: "Miopia Olho Esquerdo" },
                      {
                        key: "astigmatismoOd",
                        label: "Astigmatismo Olho Direito",
                      },
                      {
                        key: "astigmatismoOs",
                        label: "Astigmatismo Olho Esquerdo",
                      },
                      {
                        key: "hipermetropiaOd",
                        label: "Hipermetropia Olho Direito",
                      },
                      {
                        key: "hipermetropiaOs",
                        label: "Hipermetropia Olho Esquerdo",
                      },
                      { key: "estrabismoOd", label: "Estrabismo Olho Direito" },
                      {
                        key: "estrabismoOs",
                        label: "Estrabismo Olho Esquerdo",
                      },
                      { key: "anisometropia", label: "Anisometropia" },
                      { key: "anisocoria", label: "Anisocoria" },
                    ];
                    const trueObservations = fields
                      .filter((field) => observacoes[field.key])
                      .map((field) => field.label);

                    return trueObservations.length > 0 ? (
                      <p style={{ margin: 0 }}>{trueObservations.join(", ")}</p>
                    ) : (
                      <p style={{ margin: 0 }}>Sem observações</p>
                    );
                  })()
                ) : (
                  <p style={{ margin: 0 }}>Sem observações</p>
                )}
              </div>
            </Column>

            <Padding padding="4px" />
            {students?.object.anamnese && (
              <div style={{ marginBottom: "10px" }}>
                <h2 style={{ margin: 0, marginBottom: "4px" }}>Anamnese:</h2>
                <p style={{ margin: 0 }}>{students.object.anamnese}</p>
              </div>
            )}

            <h2>Refração Estática</h2>
            <TableWrapper>
              <Table>
                <thead>
                  <tr>
                    <TableHeader></TableHeader>
                    <TableHeader style={{ textAlign: "center" }}>
                      Refração Estático Esférico
                    </TableHeader>
                    <TableHeader style={{ textAlign: "center" }}>
                      Refração Estático Cilíndrico
                    </TableHeader>
                    <TableHeader style={{ textAlign: "center" }}>
                      Refração Estático Eixo
                    </TableHeader>
                    <TableHeader style={{ textAlign: "center" }}>
                      Refração Estático Acuidade Visual
                    </TableHeader>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <TableData style={{ width: "120px", whiteSpace: "nowrap" }}>
                      Olho direito
                    </TableData>
                    <TableData style={{ textAlign: "center" }}>
                      {students?.object.refracaoEstaticaEsfericoOlhoDireito}
                    </TableData>
                    <TableData style={{ textAlign: "center" }}>
                      {students?.object.refracaoEstaticaCilindricoOlhoDireito}
                    </TableData>
                    <TableData style={{ textAlign: "center" }}>
                      {students?.object.refracaoEstaticaEixoOlhoDireito}
                    </TableData>
                    <TableData style={{ textAlign: "center" }}>
                      {
                        students?.object
                          .refracaoEstaticaAcuidadeVisualOlhoDireito
                      }
                    </TableData>
                  </tr>
                  <tr>
                    <TableData style={{ width: "120px", whiteSpace: "nowrap" }}>
                      Olho esquerdo
                    </TableData>
                    <TableData style={{ textAlign: "center" }}>
                      {students?.object.refracaoEstaticaEsfericoOlhoEsquerdo}
                    </TableData>
                    <TableData style={{ textAlign: "center" }}>
                      {students?.object.refracaoEstaticaCilindricoOlhoEsquerdo}
                    </TableData>
                    <TableData style={{ textAlign: "center" }}>
                      {students?.object.refracaoEstaticaEixoOlhoEsquerdo}
                    </TableData>
                    <TableData style={{ textAlign: "center" }}>
                      {
                        students?.object
                          .refracaoEstaticaAcuidadeVisualOlhoEsquerdo
                      }
                    </TableData>
                  </tr>
                </tbody>
              </Table>
            </TableWrapper>

            <h2>Exame de Biomicroscopia</h2>

            <TableWrapper>
              <Table>
                <thead>
                  <tr>
                    <TableHeader style={{ textAlign: "center" }}>
                      Olho direito
                    </TableHeader>
                    <TableHeader style={{ textAlign: "center" }}>
                      Olho esquerdo
                    </TableHeader>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <TableData style={{ textAlign: "center" }}>
                      {students?.object.biomicroscopiaOd}
                    </TableData>
                    <TableData style={{ textAlign: "center" }}>
                      {students?.object.biomicroscopiaOs}
                    </TableData>
                  </tr>
                </tbody>
              </Table>
            </TableWrapper>

            <h2>Exame de Fundoscopia</h2>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "20px",
              }}
            >
              <TableWrapper style={{ flex: "1", marginLeft: "10px" }}>
                <Table>
                  <thead>
                    <tr>
                      <TableHeader
                        style={{ width: "10px", whiteSpace: "nowrap" }}
                      ></TableHeader>
                      <TableHeader style={{ textAlign: "left" }}>
                        Resultados
                      </TableHeader>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <TableData
                        style={{ width: "160px", whiteSpace: "nowrap" }}
                      >
                        Motilidade Ocular
                      </TableData>
                      <TableData style={{ textAlign: "left" }}>
                        {students?.object.motilidadeOcular}
                      </TableData>
                    </tr>
                    <tr>
                      <TableData
                        style={{ width: "160px", whiteSpace: "nowrap" }}
                      >
                        Diagnóstico
                      </TableData>
                      <TableData style={{ textAlign: "left" }}>
                        {students?.object.diagnostico}
                      </TableData>
                    </tr>
                    <tr>
                      <TableData
                        style={{ width: "160px", whiteSpace: "nowrap" }}
                      >
                        Conduta
                      </TableData>
                      <TableData style={{ textAlign: "left" }}>
                        {students?.object.conduta}
                      </TableData>
                    </tr>
                  </tbody>
                </Table>
              </TableWrapper>

              <TableWrapper style={{ flex: "1", marginLeft: "10px" }}>
                <Table>
                  <thead>
                    <tr>
                      <TableHeader
                        style={{ width: "10px", whiteSpace: "nowrap" }}
                      ></TableHeader>
                      <TableHeader style={{ textAlign: "left" }}>
                        Resultados
                      </TableHeader>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <TableData
                        style={{ width: "160px", whiteSpace: "nowrap" }}
                      >
                        Olho direito
                      </TableData>
                      <TableData style={{ textAlign: "left" }}>
                        {students?.object.fundoscopiaOd}
                      </TableData>
                    </tr>
                    <tr>
                      <TableData
                        style={{ width: "160px", whiteSpace: "nowrap" }}
                      >
                        Olho esquerdo
                      </TableData>
                      <TableData style={{ textAlign: "left" }}>
                        {students?.object.fundoscopiaOs}
                      </TableData>
                    </tr>
                  </tbody>
                </Table>
              </TableWrapper>
            </div>

            <div
              className="oculos-alert"
              style={{
                display: "flex",
                alignItems: "center",
                border: `3px solid`,
                borderColor: `#256cd4`,
                padding: "8px",
                borderRadius: "4px",
                width: "250px",
                height: "40px",
              }}
            >
              <h2 style={{ marginRight: "8px", fontSize: "110%" }}>
                Precisa de óculos:
              </h2>
              <p>{students?.object.precisaOculos}</p>
            </div>

            <Padding padding="4px" />

            <Column
              style={{
                display: "flex",
                alignItems: "flex-start",
                marginBottom: "10px",
              }}
            >
              <h2 style={{ margin: 0, padding: 0 }}>
                Justificativa para acompanhamento:
              </h2>
              <div style={{ padding: 0 }}>
                {students?.object.acompanhamento ? (
                  (() => {
                    const acompanhamento = students.object.acompanhamento;
                    const fields = [
                      { key: "ambliopia", label: "Ambliopia" },
                      { key: "retinoblastoma", label: "Retinoblastoma" },
                      { key: "catarataCongenita", label: "Catarata Congênita" },
                      {
                        key: "obstrucaoViasLacrimais",
                        label: "Obstrução de Vias Lacrimais",
                      },
                      { key: "estrabismo", label: "Estrabismo" },
                      { key: "glaucomaCongenito", label: "Glaucoma Congênito" },
                      { key: "uveites", label: "Uveítes" },
                      { key: "nistagmo", label: "Nistagmo" },
                      { key: "miopiaProgressiva", label: "Miopia Progressiva" },
                      { key: "ectasiasCornea", label: "Ectasias da Córnea" },
                      {
                        key: "alergiasConjuntivitesCalazio",
                        label: "Alergias, Conjuntivites e Calázio",
                      },
                      {
                        key: "baixaVisaoCentral",
                        label: "Baixa Visão Central",
                      },
                    ];

                    const trueObservations = fields
                      .filter((field) => acompanhamento[field.key])
                      .map((field) => field.label);

                    return trueObservations.length > 0 ? (
                      <p style={{ margin: 0 }}>{trueObservations.join(", ")}</p>
                    ) : (
                      <p style={{ margin: 0 }}>Não descrita</p>
                    );
                  })()
                ) : (
                  <p style={{ margin: 0 }}>Não descrita</p>
                )}
              </div>
            </Column>

            <div
              className="oculos-alert"
              style={{ display: "flex", alignItems: "center" }}
            >
              <h2>Indicação para próxima consulta: </h2>{" "}
              <p>&nbsp;&nbsp;{students?.object.proximaConsulta}</p>
            </div>

            {students?.object.observationConsulta && (
              <div>
                <h2 style={{ margin: 0, padding: 0, marginBottom: "4px" }}>
                  Observações:
                </h2>
                <p style={{ margin: 0, padding: 0 }}>
                  {students?.object.observationConsulta}
                </p>
              </div>
            )}
          </div>

          <p style={{ textAlign: "right", fontSize: "12px" }}>
            {" "}
            Consulta realizada por um profissional da saúde. Data de emissão:{" "}
            {formatarDataHora()}
          </p>
        </Padding>
      </div>
    </div>
  );
};
export default MyDocument;
