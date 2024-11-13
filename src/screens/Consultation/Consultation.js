import Grid from "@material-ui/core/Grid";
import Alert from "@material-ui/lab/Alert";
import React, { useEffect, useState } from "react";

import { Container, Select } from "@material-ui/core";

import api from "../../services/api";

import {BoxConsultation } from "../../components/Boxes";
import List from "../../components/List";
import { Padding } from "../../styles/style";


const Consultation = ({ classroom, setIdSchool, idSchool }) => {
  
  const [consultation, setConsultation] = useState([]);
 

  console.log(consultation);
  useEffect(() => {
    const callFunction = async () => {
      try {
        const result = await api.get(

          //todo: endpoint para buscar alunos encaminhados para consulta no deploy nao esta retornando nada
          //"https://us-central1-br-ipti-visao.cloudfunctions.net/consultationReport"
           "http://127.0.0.1:5001/br-ipti-visao/us-central1/fowardedForConsultation"
        );
        setConsultation(result.data);
      } catch (error) {
        console.error("Error calling function:", error);
      }
    };
    callFunction();
  }, []);

  //console.log(result)
  const renderCard = (card, index) => {
    return consultation?.map((item, index) => {
      console.log(item);
      return (
        <BoxConsultation
          link={`/turmas/${item?.classroom_id}/matricula/${item?.student_id}`}
          key={index}
          name={item?.student_name}
          // sex={consultation?.sex}
          id={item?.student_id}
          points={item?.points}
          turma={item?.classroom}
          birthday={item?.birthday}
          // triagem={
          //   consultation.object.testCover ||
          //   consultation.object.testManchaBranca ||
          //   consultation.object.testMovimentoOcular
          // }
          md={4}
          sm={4}
          // unavailable={consultation?.unavailable}
        />
      );
    });
  };

  return (
    //todo: listagem de alunos que foram encaminhados para consulta
    <Container style={{ padding: "8px", cursor: "pointer" }}>
      <h1>Consultas</h1>
      {/* <div className={`${classes.spaceBetween}`}>
            <div style={{ width: matches ? "80%" : "50%" }}>
              <label>Escolha uma escola</label>
              <Padding />
              <Select
                className="basic-single"
                classNamePrefix="select"
                placeholder="Digite uma escola"
                options={school}
                value={idSchool}
                defaultValue={idSchool}
                onChange={(selectedOption) => {
                  setIdSchool(selectedOption.id);
                  idSchoolLocal(selectedOption.id);
                }}
                getOptionValue={(opt) => opt.id}
                getOptionLabel={(opt) => opt.object.name}
              />
            </div>
          </div> */}
      <Grid container direction="row" spacing={3}>
        <List items={renderCard()}>
          <Grid item xs={12}>
            <Alert variant="outlined" severity="warning">
              Nenhuma aluno encaminhado
            </Alert>
          </Grid>
        </List>
      </Grid>
    </Container>
  );
};

export default Consultation;
