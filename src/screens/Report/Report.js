import React from 'react';
import './style.css'; 
import Grid from "@material-ui/core/Grid";

const ReportPage = () => {

    // const [visible, setVisible] = useState(false)
    // const abrirPDF = () => {
    //     window.open(pdfUrl);
    // };

    return (
        <Grid container direction="row">
            <h1>Relatórios</h1>
            <Grid checkMockup={[{}, {}]}>
                <button className="relatorio-geral-button">Relatório Geral</button>
                <p>Preenchimento de formulários por escola</p>
            </Grid>
        </Grid>
    )
}

export default ReportPage;