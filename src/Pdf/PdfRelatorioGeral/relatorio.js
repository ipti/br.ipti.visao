import { SaveAlt } from '@material-ui/icons';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import React, { useEffect, useRef, useState } from 'react';
import logo from "../../assets/images/logo.svg";

import { Column, Padding, Row } from '../../styles/style';
import { Table, TableData, TableHeader, TableWrapper } from '../style';

import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import api from '../../services/api';
//import { Tab } from 'semantic-ui-react';

// Create Document Component
const MyDocument = () => {

    const contentRef = useRef(null);

    const [report, setReport] = useState([])
    const [isFetching, setIsFetching] = useState(true)

    const generatePDF = () => {
        if (!contentRef.current) return;

        const elementToCapture = contentRef.current;

        html2canvas(elementToCapture).then((canvas) => {
            const pdf = new jsPDF('p', 'mm', 'a4');

            const imgData = canvas.toDataURL('image/png');
            const imgWidth = 210;
            const imgHeight = (canvas.height * imgWidth) / canvas.width;
            pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);

            pdf.save(`RelatorioGeral-Lupa.pdf`);
        });
    };

    useEffect(() => {
        const callFunction = async () => {
            try {
              const result = await api.get('https://us-central1-br-ipti-visao.cloudfunctions.net/generalReport');
            setReport(result.data);
            } catch (error) {
              console.error('Error calling function:', error);
            } finally {
              setIsFetching(false);
            }
        };
        callFunction();
    }, [])


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
                                <h1 style={{ padding: "0 4px", margin: 0, color: "#000" }}>Lupa : Relatório Geral </h1>
                                <Padding />
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
                
                    <div>
                        <TableWrapper>
                            <Table>
                                <thead>
                                    <tr>
                                        <TableHeader style={{ textAlign: "center" }}>Nome da escola</TableHeader>
                                        <TableHeader style={{ textAlign: "center" }}>Nº de Turmas</TableHeader>
                                        <TableHeader style={{ textAlign: "center" }}>Total de Matriculas</TableHeader>
                                        <TableHeader style={{ textAlign: "center" }}>Total de Questionario com os Pais</TableHeader>
                                        <TableHeader style={{ textAlign: "center" }}>Total de Triagens</TableHeader>
                                        <TableHeader style={{ textAlign: "center" }}>Encaminhados para Consulta</TableHeader>
                                        <TableHeader style={{ textAlign: "center" }}>Consultas Realizadas</TableHeader>
                                        <TableHeader style={{ textAlign: "center" }}>Total de Receitas Geradas</TableHeader>
                                        <TableHeader style={{ textAlign: "center" }}>Total de Óculos Entregues</TableHeader>
                                    </tr>
                                </thead>
                                <tbody>
                                    {isFetching ? (
                                        // Mostrar Skeleton enquanto os dados estão sendo carregados
                                        <tr>
                                            <TableData><Skeleton height={20} /></TableData>
                                            <TableData><Skeleton height={20} /></TableData>
                                            <TableData><Skeleton height={20} /></TableData>
                                            <TableData><Skeleton height={20} /></TableData>
                                            <TableData><Skeleton height={20} /></TableData>
                                            <TableData><Skeleton height={20} /></TableData>
                                            <TableData><Skeleton height={20} /></TableData>
                                            <TableData><Skeleton height={20} /></TableData>
                                            <TableData><Skeleton height={20} /></TableData>
                                        </tr>
                                    ) : (
                                        // Renderizar os dados do relatório
                                        report.map((item, index) => (
                                            <tr key={index}>
                                                <TableData style={{ textAlign: "center" }}>{item.school}</TableData>
                                                <TableData style={{ textAlign: "center" }}>{item.countClassroom}</TableData>
                                                <TableData style={{ textAlign: "center" }}>{item.countRegister}</TableData>
                                                <TableData style={{ textAlign: "center" }}>{item.countQuestianarioPais}</TableData>
                                                <TableData style={{ textAlign: "center" }}>{item.countRegisterTriados}</TableData>
                                                <TableData style={{ textAlign: "center" }}>{item.countForwardedConsultation}</TableData>
                                                <TableData style={{ textAlign: "center" }}>{item.countConsultationCompleted}</TableData>
                                                <TableData style={{ textAlign: "center" }}>{item.countReceitaOculosCompleted}</TableData>
                                                <TableData style={{ textAlign: "center" }}>{item.countEntregaOculosCompleted}</TableData>
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
}
export default MyDocument