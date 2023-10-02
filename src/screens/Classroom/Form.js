import React from "react";

// Material UI
import Grid from "@material-ui/core/Grid";
import Alert from "@material-ui/lab/Alert";

// Third party

// Components
import { BoxRegistration } from "../../components/Boxes";
import List from "../../components/List";
import { useParams } from "react-router-dom";

// Styles
import { ArrowBack } from "@material-ui/icons";
import { useHistory } from "react-router";
import { Padding } from "../../styles/style";
import { ButtonPurple } from "../../components/Buttons";

const Create = props => {

  const history = useHistory()

  const {
    data,
    baseLink,
  } = props;

  const { id } = useParams()

  const registrations = () => {
    const registrationList = data ?? [];

    return registrationList.map((registration, index) => {

      const points = () => {
        var count = 0;
    
        if (registration) {
          if (registration.object.filhoOculos === "1") {
            count++;
          }
          if ((registration.object.filhossintomas.dificuldadeQuadro && registration.object.filhossintomas.olhoTortoMomentos) ||
            (registration.object.filhossintomas.dificuldadeLivro && registration.object.filhossintomas.olhoTortoMomentos) ||
            (registration.object.filhossintomas.dificuldadeQuadro && registration.object.filhossintomas.rostoApertaOlhos) ||
            (registration.object.filhossintomas.dificuldadeLivro && registration.object.filhossintomas.rostoApertaOlhos) ||
            registration.object.filhossintomas.olhoTortoConstante ||
            (registration.object.filhossintomas.olhoTortoMomentos && registration.object.filhossintomas.rostoApertaOlhos) ||
            registration.object.filhossintomas.tremorOlhos ||
            registration.object.filhossintomas.manchaBrancaPupila) {
            count++;
          }
          if (
            registration.object.doencasNosOlhos.olhoPreguicoso ||
            registration.object.doencasNosOlhos.olhoTorto ||
            registration.object.doencasNosOlhos.catarataInfancia ||
            registration.object.doencasNosOlhos.glaucomaCongenito ||
            registration.object.doencasNosOlhos.tumorOlhos ||
            registration.object.doencasNosOlhos.ceratoconeTransplante ||
            registration.object.doencasNosOlhos.palpebraCaida
          ) {
            count++;
          }
          if (
            registration.object.doencasFamiliares.miopiaAmbosPais ||
            registration.object.doencasFamiliares.miopiaUmPai ||
            registration.object.doencasFamiliares.hipermetropiaAstigmatismo ||
            registration.object.doencasFamiliares.estrabismo ||
            registration.object.doencasFamiliares.catarataGlaucoma ||
            registration.object.doencasFamiliares.olhoPreguicoso ||
            registration.object.doencasFamiliares.tumorOlho
          ) {
            count++;
          }
          if (
            registration.object.doencas?.prematuridade ||
            registration.object.doencas?.sindromeDown ||
            registration.object.doencas?.paralisiaTumorCerebral ||
            registration.object.doencas?.outrasSindromesGeneticas ||
            registration.object.doencas?.diabetes ||
            registration.object.doencas?.artriteArtrose ||
            registration.object.doencas?.alergiasCorticoides
          ) {
            count++;
          }
          if (
            registration.object.horasUsoAparelhosEletronicos === 4 ||
            registration.object.horasUsoAparelhosEletronicos === 5
          ) {
            count++;
          }
          if (registration.object.horasAtividadesAoArLivre === 1 || registration.object.horasAtividadesAoArLivre === 2) {
            count++;
          }
          if (registration.object.testCover === "1") {
            count++;
          }
          if (registration.object.testMovimentoOcular === "1") {
            count++;
          }
          if (registration.object.testManchaBranca === "1") {
            count++;
          }
          if (
            registration.object.acuidadeTriagemEsquerdo === "1" ||
            registration.object.acuidadeTriagemEsquerdo === "2" ||
            registration.object.acuidadeTriagemEsquerdo === "3" ||
            registration.object.acuidadeTriagemEsquerdo === "4" ||
            registration.object.acuidadeTriagemEsquerdo === "5" ||
            registration.object.acuidadeTriagemEsquerdo === "6" ||
            registration.object.acuidadeTriagemEsquerdo === "7"
          ) {
            count = count + 5;
          }
          if (
            registration.object.acuidadeTriagemEsquerdo === "8" 
          ) {
            count = count + 2;
          }
          if (
            registration.object.acuidadeTriagemEsquerdo === "nenhum"
          ) {
            count = count + 2;
          }
          if (
            registration.object.acuidadeTriagemDireito === "1" ||
            registration.object.acuidadeTriagemDireito === "2" ||
            registration.object.acuidadeTriagemDireito === "3" ||
            registration.object.acuidadeTriagemDireito === "4" ||
            registration.object.acuidadeTriagemDireito === "5" ||
            registration.object.acuidadeTriagemDireito === "6" ||
            registration.object.acuidadeTriagemDireito === "7"
          ) {
            count = count + 5;
          }
          if (
            registration.object.acuidadeTriagemDireito === "8" 
          ) {
            count = count + 2;
          }
          if (
            registration.object.acuidadeTriagemDireito === "nenhum"
          ) {
            count = count + 2;
          }
        }
    
        return count;
      }

      return (
        <BoxRegistration
          link={`${baseLink}/${registration?.id}`}
          key={index}
          name={registration?.object.name}
          sex={registration?.sex}
          id={registration?.id}
          points={points()}
          md={4}
          sm={4}
          unavailable={registration?.unavailable}
        />
      );
    });
  };

  return (
    <>
      <ArrowBack onClick={() => { history.goBack() }} style={{ cursor: "pointer" }} />
      <h1>{data && data.name}</h1>
      <h2>Alunos</h2>
      <Padding padding="16px" />
      <Grid
        // className={classes.marginButtom}
        container
        direction="row"
        style={{ marginBottom: "16px" }}
      >
        <Grid item md={2} sm={2}>
          <ButtonPurple
            className="t-button-primary"
            onClick={() => history.push(`/turmas/${id}/pdf`)}
            title={"Relatório de alunos"}
          />
        </Grid>
      </Grid>
      <Grid container direction="row" spacing={4}>
        <List items={registrations()}>
          <Grid item xs={12}>
            <Alert variant="outlined" severity="warning">
              A turma não possui matrículas
            </Alert>
          </Grid>
        </List>
      </Grid>
    </>
  );
};

export default Create;
