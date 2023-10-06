import { SaveAlt } from '@material-ui/icons';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import React, { useEffect, useRef, useState } from 'react';
import { useParams } from "react-router-dom";
import logo from "../../assets/images/logo.svg";
import fetchOneRegistration from '../../controller/registration/fetchOneRegistration';
import { Column, Padding, Row } from '../../styles/style';
import { Table, TableData, TableHeader, TableWrapper } from '../style';




// Create Document Component
const MyDocument = () => {


    const contentRef = useRef(null);


    const { idRegistration } = useParams()


    const [students, setStudents] = useState()

    const generatePDF = () => {
        if (!contentRef.current) return;

        const elementToCapture = contentRef.current;

        html2canvas(elementToCapture).then((canvas) => {
            const pdf = new jsPDF('p', 'mm', 'a4');

            const imgData = canvas.toDataURL('image/png');
            const imgWidth = 210;
            const imgHeight = (canvas.height * imgWidth) / canvas.width;
            pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);

            pdf.save(`Receita-${students.object.name}-Lupa.pdf`);
        });
    };

    useEffect(() => {
        console.log("eeuu")
        fetchOneRegistration(idRegistration)
            .then((testDataList) => {
                console.log("eeuu")
                setStudents(testDataList)
            })
            .catch((err) => {
                // Trate erros, se ocorrerem
                console.error(err)
            })
    }, [idRegistration])

    function formatarDataHora() {
        const agora = new Date();
        const dia = agora.getDate().toString().padStart(2, '0');
        const mes = (agora.getMonth() + 1).toString().padStart(2, '0'); // Lembre-se de que os meses são baseados em zero
        const ano = agora.getFullYear();
        const hora = agora.getHours().toString().padStart(2, '0');
        const minutos = agora.getMinutes().toString().padStart(2, '0');

        return `${dia}/${mes}/${ano} - ${hora}:${minutos}h`;
    }

    return (
        <div style={{ width: "100%" }}>


            <Padding padding="32px 16px">
                <button style={{ padding: "8px", cursor: "pointer" }} onClick={generatePDF}><Row><SaveAlt /><h3 style={{ padding: "0 4px", margin: 0, color: "#000" }}>Gerar PDF</h3></Row></button>
            </Padding>
            <div ref={contentRef}>
                <Padding padding="16px">

                    <Column>
                        <Row id='space-between'>
                            <Column>
                                <h1 style={{ padding: "0 4px", margin: 0, color: "#000" }}>Nome: {students?.object.name}</h1>
                                <Padding />
                                <h2 style={{ padding: "0 4px", margin: 0, color: "#000" }}>Data de Nascimento: {students?.object.birthday}</h2>
                                <Padding />
                                <h2 style={{ padding: "0 4px", margin: 0, color: "#000" }}>Data da consulta: {students?.object.dataConsulta}</h2>
                                <Padding />
                                <h2 style={{ padding: "0 4px", margin: 0, color: "#000" }}>Médico: {students?.object.nomeMedico}    <Padding /> CRM: {students?.object.crmMedico}</h2>
                            </Column>
                            <Column id="center">
                                <Row id="center">
                                    <img style={{ width: "256px", padding: "8px 16px" }} alt="" src={logo} />
                                </Row>
                            </Column>
                        </Row>
                    </Column>
                    <Padding padding="8px" />
                    <div style={{ backgroundColor: "black", height: "1px" }}></div>
                    <Column>
                        <Row id='center'>
                            <h1 style={{ padding: "0px" }}>Receita de óculos </h1>
                        </Row>
                    </Column>
                    <div>
                        <TableWrapper>
                            <Table>
                                <thead>
                                    <tr>
                                        <TableHeader></TableHeader>
                                        <TableHeader style={{ textAlign: "center" }}>Esférico</TableHeader>
                                        <TableHeader style={{ textAlign: "center" }}>Cilíndrico</TableHeader>
                                        <TableHeader style={{ textAlign: "center" }}>Eixo</TableHeader>
                                        <TableHeader style={{ textAlign: "center" }}>DP</TableHeader>
                                    </tr>
                                </thead>
                                <tbody>

                                    <tr>
                                        <TableData>Olho direito</TableData>
                                        <TableData style={{ textAlign: "center" }}>{students?.object.receitaEsfericoOlhoDireito}</TableData>
                                        <TableData style={{ textAlign: "center" }}>{students?.object.receitaCilindricoOlhoDireito}</TableData>
                                        <TableData style={{ textAlign: "center" }}>{students?.object.receitaEixoOlhoDireito}</TableData>
                                        <TableData style={{ textAlign: "center" }}>{students?.object.receitaDpOlhoDireito}</TableData>
                                    </tr>
                                    <tr>
                                        <TableData>Olho esquerdo</TableData>
                                        <TableData style={{ textAlign: "center" }}>{students?.object.receitaEsfericoOlhoEsquerdo}</TableData>
                                        <TableData style={{ textAlign: "center" }}>{students?.object.receitaCilindricoOlhoEsquerdo}</TableData>
                                        <TableData style={{ textAlign: "center" }}>{students?.object.receitaEixoOlhoEsquerdo}</TableData>
                                        <TableData style={{ textAlign: "center" }}>{students?.object.receitaDpOlhoEsquerdo}</TableData>
                                    </tr>
                                </tbody>
                            </Table>
                        </TableWrapper>
                    </div>

                    <p>Receita feita por um profisional da saúde. Data de emissão: {formatarDataHora()} </p>
                </Padding>
            </div>
        </div>
    )

}
export default MyDocument