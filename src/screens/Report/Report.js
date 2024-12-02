import React from "react";
import './style.css';
import { Card } from 'primereact/card';
import Grid from "@material-ui/core/Grid";
import { Column, Padding, Row } from '../../styles/style';
import styles from '../../styles';
import turmaBlueSvg from "../../assets/images/classroom-blue.svg";
import { Container } from "@material-ui/core";

import { useHistory } from "react-router-dom";


const ReportPage = () => {

    const history = useHistory();

    return (

        <Container style={{ cursor: "pointer" }} >
            <h1>Relatórios</h1>
            <Grid checkMockup={[{}, {}]}>
                <Card style={{ width: "auto, cursor: pointer", border: "1px solid #4682B4"  }} onClick={() => {history.push("/relatorios/pdfrelatorio")}}>
                    <Row>
                        <Column>
                        <img src={turmaBlueSvg} alt="" style={{ width: "100px", height: "100px" }} />
                        </Column>
                        <Column>
                            <i className='pi pi-file' style={{ fontSize: "2.5rem", color: styles.colors.colorsBaseProductNormal }}> </i>
                            <Column id="space-between">
                                <h2>Relatório Geral</h2>                
                                {/* padding */}
                                <p style={{ color: styles.colors.grayClear, fontSize: "14px" }}>Relatório referente ao preenchimento de formulários por escola</p>
                            </Column>
                        </Column>
                    </Row>
                </Card>
                <Padding> </Padding>
            </Grid>

            <Padding> </Padding>    

            <Grid checkMockup={[{}, {}]}>
                <Card style={{ width: "auto, cursor: pointer", border: "1px solid #4682B4"  }} onClick={() => {history.push("/relatorios/pdfestudantesparaconsulta")}}>
                    <Row>
                        <Column>
                        <img src={turmaBlueSvg} alt="" style={{ width: "100px", height: "100px" }} />
                        </Column>
                        <Column>
                            <i className='pi pi-file' style={{ fontSize: "2.5rem", color: styles.colors.colorsBaseProductNormal }}> </i>
                            <Column id="space-between">
                                <h2>Relatório de Estudantes Encaminhados para Consulta</h2>                
                                {/* padding */}
                                <p style={{ color: styles.colors.grayClear, fontSize: "14px" }}>Relatório referente aos estudantes que entram na prioridade para lista de consultas</p>
                            </Column>
                        </Column>
                    </Row>
                </Card>
                <Padding> </Padding>
            </Grid>
        </Container>
    )
}

export default ReportPage;