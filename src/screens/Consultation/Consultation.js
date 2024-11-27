import Grid from "@material-ui/core/Grid";
import Alert from "@material-ui/lab/Alert";
import CircularProgress from "@material-ui/core/CircularProgress";
import React, { useEffect, useState } from "react";

import { Container, useMediaQuery } from "@material-ui/core";
import Select from "react-select";

import api from "../../services/api";

import { BoxConsultation } from "../../components/Boxes";
import List from "../../components/List";
import { Padding } from "../../styles/style";

const Consultation = ({ setIdSchool, idSchool }) => {
  const [consultation, setConsultation] = useState([]);
  const [schoolOptions, setSchoolOptions] = useState([]);
  const [filteredConsultation, setFilteredConsultation] = useState([]);
  const [loading, setLoading] = useState(true); // Estado para o loading

  const matches = useMediaQuery("(max-width:600px)");

  // Fetch consultations data
  useEffect(() => {
    const callFunction = async () => {
      try {
        const result = await api.get("/fowardedForConsultation");
        setConsultation(result.data);
        setFilteredConsultation(result.data); 

        const uniqueSchools = Array.from(
          new Map(
            result.data.map((item) => [item.school_id, { id: item.school_id, name: item.school }])
          ).values()
        );
        setSchoolOptions(uniqueSchools);
      } catch (error) {
        console.error("Error calling function:", error);
      } finally {
        setTimeout(() => setLoading(false), 2000);
      }
    };
    callFunction();
  }, []);

  const handleSchoolChange = (selectedOption) => {
    setIdSchool(selectedOption.id);
    const filtered = consultation.filter(
      (item) => item.school_id === selectedOption.id
    );
    setFilteredConsultation(filtered);
  };

  const renderCard = () => {
    return filteredConsultation.map((item, index) => (
      <BoxConsultation
        link={`/turmas/${item?.classroom_id}/matricula/${item?.student_id}`}
        key={index}
        name={item?.student_name}
        id={item?.student_id}
        points={item?.points}
        turma={item?.classroom}
        birthday={item?.birthday}
        md={4}
        sm={4}
      />
    ));
  };

  return (
    <Container style={{ padding: "8px", cursor: "pointer" }}>
      <h1>Consultas</h1>
      {loading ? (
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          style={{ minHeight: "50vh" }} 
        >
          <CircularProgress />
          <Padding padding="10px" />
          <span>Carregando...</span>
        </Grid>
      ) : (
        <>
          <div style={{ width: matches ? "80%" : "50%" }}>
            <label>Escolha uma escola</label>
            <Padding padding="10px" />
            <Select
              className="basic-single"
              classNamePrefix="select"
              placeholder="Digite uma escola"
              options={schoolOptions}
              value={schoolOptions.find((s) => s.id === idSchool)}
              onChange={handleSchoolChange}
              getOptionValue={(opt) => opt.id}
              getOptionLabel={(opt) => opt.name}
            />
          </div>
          <Padding padding="10px" />
          <Grid container direction="row" spacing={3}>
            {filteredConsultation.length > 0 ? (
              <List items={renderCard()} />
            ) : (
              <Grid item xs={12}>
                <Alert variant="outlined" severity="warning">
                  Nenhum aluno encaminhado
                </Alert>
              </Grid>
            )}
          </Grid>
        </>
      )}
    </Container>
  );
};

export default Consultation;
