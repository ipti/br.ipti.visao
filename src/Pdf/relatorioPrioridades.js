import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import React, { useRef } from 'react';
import { Column, Padding, Row } from '../styles/style';
import { Table, TableData, TableHeader, TableWrapper } from './style';



// Create Document Component
const MyDocument = () => {


    const contentRef = useRef(null);

    const generatePDF = () => {
        if (!contentRef.current) return;

        const elementToCapture = contentRef.current;

        html2canvas(elementToCapture).then((canvas) => {
            const pdf = new jsPDF('p', 'mm', 'a4');

            const imgData = canvas.toDataURL('image/png');
            const imgWidth = 210;
            const imgHeight = (canvas.height * imgWidth) / canvas.width;
            pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);

            pdf.save('generated-pdf.pdf');
        });
    };

    return (
        <div style={{ width: "100%" }}>
            <button onClick={generatePDF}>Gerar PDF</button>


            <div ref={contentRef}>
                <Padding>
                    <Column>
                        <Row>
                            <h1>Escola Modelo</h1>
                        </Row>
                        <h2>Turma 3</h2>
                    </Column>

                    <div style={{ backgroundColor: "black", height: "1px" }}></div>
                    <Row id='center'>
                        <h1>Relatorio de Alunos </h1>
                    </Row>
                    <div>
                        <TableWrapper>
                            <Table>
                                <thead>
                                    <tr>
                                        <TableHeader>Nome</TableHeader>
                                        <TableHeader>Pontuação</TableHeader>
                                        <TableHeader>Prioridade</TableHeader>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <TableData>João</TableData>
                                        <TableData>10</TableData>
                                        <TableData>Prioridade minima</TableData>
                                    </tr>
                                </tbody>
                            </Table>
                        </TableWrapper>
                    </div>
                    <p>Este é um exemplo de conteúdo que será incluído no PDF.</p>
                </Padding>
            </div>
        </div>
    )

}
export default MyDocument