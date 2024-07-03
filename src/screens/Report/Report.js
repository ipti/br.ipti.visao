import React, {useState } from "react";
import './style.css';
import { Card } from 'primereact/card';
import Grid from "@material-ui/core/Grid";
import { Column, Padding, Row } from '../../styles/style';
import styles from '../../styles';
import { Container } from "@material-ui/core";

//aqui nesses parenteses voce pode definir os parametros que quer receber
const ReportPage = () => {

    const [report, setReport] = useState([])
    const pdfUrl = "http://www.africau.edu/images/default/sample.pdf"; //definir aqui depois o modelo o PDF
    const abrirPDF = () => {
        window.open(pdfUrl);
    };

    return (

        <Container>
            <h1>Relatórios</h1>
            <Grid checkMockup={[{}, {}]}>
                <Card style={{ width: "auto, cursor: pointer" }} onClick={abrirPDF}>
                    <Row>
                        <Column>
                            <i className='pi pi-file' style={{ fontSize: "2.5rem", color: styles.colors.colorsBaseProductNormal }}> </i>
                            {/* padding */}
                            <Column id="space-between">
                                <h2>Titulo card</h2>
                                {/* padding */}
                                <p style={{ color: styles.colors.grayClear, fontSize: "12px" }}>Descricao do titlulo do card</p>
                            </Column>
                        </Column>
                    </Row>
                </Card>
                
                <Padding> </Padding>
                
                <Card style={{ width: "auto, cursor: pointer" }} onClick={abrirPDF}>
                    <Row>
                        <Column>
                            <i className='pi pi-file' style={{ fontSize: "2.5rem", color: styles.colors.colorsBaseProductNormal }}> </i>
                            {/* padding */}
                            <Column id="space-between">
                                <h2>Titulo card</h2>
                                {/* padding */}
                                <p style={{ color: styles.colors.grayClear, fontSize: "12px" }}>Descricao do titlulo do card</p>
                            </Column>
                        </Column>
                    </Row>
                </Card>
            </Grid>
        </Container>
    )
}

export default ReportPage;