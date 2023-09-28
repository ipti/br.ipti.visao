import { SaveAlt } from '@material-ui/icons';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import React, { useEffect, useRef, useState } from 'react';
import { useParams } from "react-router-dom";
import fetchOneSchool from '../controller/School/fetchOneSchool';
import fetchOneClassroom from '../controller/classroom/fetchOneClassroom';
import fetchRegistration from '../controller/registration/fetchRegistration';
import { getIdSchool } from '../services/auth';
import { Column, Padding, Row } from '../styles/style';
import { Table, TableData, TableHeader, TableWrapper } from './style';
import logo from "../assets/images/logo.svg";




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

            pdf.save('relatorio-alunos.pdf');
        });
    };

    const { id } = useParams()

    const points = (oneRegistration) => {
        var count = 0;

        if (oneRegistration) {
            if (oneRegistration.object.filhoOculos === "1") {
                count++;
            }
            if ((oneRegistration.object.filhossintomas.dificuldadeQuadro && oneRegistration.object.filhossintomas.olhoTortoMomentos) ||
                (oneRegistration.object.filhossintomas.dificuldadeLivro && oneRegistration.object.filhossintomas.olhoTortoMomentos) ||
                (oneRegistration.object.filhossintomas.dificuldadeQuadro && oneRegistration.object.filhossintomas.rostoApertaOlhos) ||
                (oneRegistration.object.filhossintomas.dificuldadeLivro && oneRegistration.object.filhossintomas.rostoApertaOlhos) ||
                oneRegistration.object.filhossintomas.olhoTortoConstante ||
                (oneRegistration.object.filhossintomas.olhoTortoMomentos && oneRegistration.object.filhossintomas.rostoApertaOlhos) ||
                oneRegistration.object.filhossintomas.tremorOlhos ||
                oneRegistration.object.filhossintomas.manchaBrancaPupila) {
                count++;
            }
            if (
                oneRegistration.object.doencasNosOlhos.olhoPreguicoso ||
                oneRegistration.object.doencasNosOlhos.olhoTorto ||
                oneRegistration.object.doencasNosOlhos.catarataInfancia ||
                oneRegistration.object.doencasNosOlhos.glaucomaCongenito ||
                oneRegistration.object.doencasNosOlhos.tumorOlhos ||
                oneRegistration.object.doencasNosOlhos.ceratoconeTransplante ||
                oneRegistration.object.doencasNosOlhos.palpebraCaida
            ) {
                count++;
            }
            if (
                oneRegistration.object.doencasFamiliares.miopiaAmbosPais ||
                oneRegistration.object.doencasFamiliares.miopiaUmPai ||
                oneRegistration.object.doencasFamiliares.hipermetropiaAstigmatismo ||
                oneRegistration.object.doencasFamiliares.estrabismo ||
                oneRegistration.object.doencasFamiliares.catarataGlaucoma ||
                oneRegistration.object.doencasFamiliares.olhoPreguicoso ||
                oneRegistration.object.doencasFamiliares.tumorOlho
            ) {
                count++;
            }
            if (
                oneRegistration.object.doencas?.prematuridade ||
                oneRegistration.object.doencas?.sindromeDown ||
                oneRegistration.object.doencas?.paralisiaTumorCerebral ||
                oneRegistration.object.doencas?.outrasSindromesGeneticas ||
                oneRegistration.object.doencas?.diabetes ||
                oneRegistration.object.doencas?.artriteArtrose ||
                oneRegistration.object.doencas?.alergiasCorticoides
            ) {
                count++;
            }
            if (
                oneRegistration.object.horasUsoAparelhosEletronicos === 3 ||
                oneRegistration.object.horasUsoAparelhosEletronicos === 4 ||
                oneRegistration.object.horasUsoAparelhosEletronicos === 5
            ) {
                count++;
            }
            if (oneRegistration.object.horasAtividadesAoArLivre === 1 || oneRegistration.object.horasAtividadesAoArLivre === 2) {
                count++;
            }
            if (oneRegistration.object.testCover === "1") {
                count++;
            }
            if (oneRegistration.object.testMovimentoOcular === "1") {
                count++;
            }
            if (oneRegistration.object.testManchaBranca === "1") {
                count++;
            }
            if (
                oneRegistration.object.acuidadeTriagem === "1" ||
                oneRegistration.object.acuidadeTriagem === "2" ||
                oneRegistration.object.acuidadeTriagem === "3" ||
                oneRegistration.object.acuidadeTriagem === "4" ||
                oneRegistration.object.acuidadeTriagem === "5" ||
                oneRegistration.object.acuidadeTriagem === "6" ||
                oneRegistration.object.acuidadeTriagem === "7" ||
                oneRegistration.object.acuidadeTriagem === "8" ||
                oneRegistration.object.acuidadeTriagem === "9" ||
                oneRegistration.object.acuidadeTriagem === "10"
            ) {
                count++;
            }
        }

        return count;
    }


    const [students, setStudents] = useState([])
    const [school, setSchool] = useState()
    const [classroom, setClassroom] = useState()

    useEffect(() => {
        fetchRegistration()
            .then((testDataList) => {
                const student = testDataList.filter(props => props.object.classroom_fk === id)
                setStudents(student)
            })
            .catch((err) => {
                console.error(err)
            })
        fetchOneSchool(getIdSchool())
            .then((testDataList) => {
                setSchool(testDataList)
            })
            .catch((err) => {
                console.error(err)
            })
        fetchOneClassroom(id)
            .then((testDataList) => {
                setClassroom(testDataList)
            })
            .catch((err) => {
                console.error(err)
            })
    }, [id])

    const ordenarPorPrioridade = () => {

        var orden = []

        students.forEach(element => {
            orden.push({ student: element, points: points(element) })
        });

        return orden.sort((a, b) => b.points - a.points)
    }

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
                    <Column id="center">
                        <Row id="center">
                            <img style={{ width: "256px", padding: "8px 16px" }} alt="" src={logo} />
                        </Row>
                    </Column>
                    <Column>
                        <Row id='space-between'>
                            <Column>
                                <h1 style={{ padding: "0 4px", margin: 0, color: "#000" }}>Escola: {school?.object.name}</h1>
                                <Padding />
                                <h1 style={{ padding: "0 4px", margin: 0, color: "#000" }}>Turma: {classroom?.object.name}</h1>
                                <Padding />
                                <h1 style={{ padding: "0 4px", margin: 0, color: "#000" }}>Data de Emissão: {formatarDataHora()}</h1>
                            </Column>
                        </Row>
                    </Column>
                    <Padding padding="8px" />
                    <div style={{ backgroundColor: "black", height: "1px" }}></div>
                    <Column>
                        <Row id='center'>
                            <h1 style={{ padding: "0px" }}>Relatório de Alunos </h1>
                        </Row>
                    </Column>
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
                                    {ordenarPorPrioridade().map((item, index) => {
                                        return (
                                            <tr key={index}>
                                                <TableData>{item.student.object.name}</TableData>
                                                <TableData>{item.points}</TableData>
                                                <TableData>{item.points < 5 ? "Prioridade minima" : item.points >= 5 ? "Prioridade média" : ""}</TableData>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </Table>
                        </TableWrapper>
                    </div>
                    <p>Relatório de alunos com suas respectivas prioridades para a consulta. </p>
                </Padding>
            </div>
        </div>
    )

}
export default MyDocument