import React, { useEffect, useState } from "react";
import { Container, Grid, useMediaQuery, CircularProgress } from "@material-ui/core";
import Select from "react-select";
import Alert from "@material-ui/lab/Alert";
import { Pagination } from "@mui/material";

import api from "../../services/api";
import { BoxConsultation } from "../../components/Boxes";
import List from "../../components/List";
import { Padding } from "../../styles/style";

const ITEMS_PER_PAGE = 9; // Número de itens por página

const Consultation = ({ setIdSchool, idSchool }) => {
  const [consultation, setConsultation] = useState([]);
  const [schoolOptions, setSchoolOptions] = useState([]);
  const [filteredConsultation, setFilteredConsultation] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  const matches = useMediaQuery("(max-width:600px)");

  useEffect(() => {
    const callFunction = async () => {
      setLoading(true);
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
        setLoading(false);
      } catch (error) {
        console.error("Error calling function:", error);
        setLoading(false);
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
    setCurrentPage(1);
  };

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentItems = filteredConsultation.slice(startIndex, endIndex);

  const renderCard = () => {
    return currentItems.map((item, index) => (
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
    <Container style={{ cursor: "pointer" }}>
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
          {idSchool && (
            <h2 style={{ textAlign: "left", marginTop: "20px" }}>
              {schoolOptions.find((school) => school.id === idSchool)?.name}
            </h2>
          )}
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
              <>
                <List items={renderCard()} />
                <Grid item xs={12}>
                  <Pagination
                    count={Math.ceil(filteredConsultation.length / ITEMS_PER_PAGE)} // Total de páginas
                    page={currentPage}
                    onChange={handlePageChange}
                    color="primary"
                    style={{ marginTop: "20px", display: "flex", justifyContent: "center" }}
                  />
                </Grid>
              </>
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
