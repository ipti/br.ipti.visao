import React, { useEffect, useState } from "react";


import { Grid, useMediaQuery } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles } from "@material-ui/core/styles";
import { MenuTwoTone } from "@material-ui/icons";
import AccountCircle from "@material-ui/icons/AccountCircle";
import { CircularProgress } from "@mui/material";
import { useHistory } from "react-router-dom";
import Select from "react-select";
import { useFetchRequestSchoolList } from "../../query/registration";
import { getIdSchool, idSchool, isAuthenticated } from "../../services/auth";
import styleBase from "../../styles";


const customStyles = {
  control: base => ({
    ...base,
    height: "40px",
    minHeight: "40px",
    color: "black",
    fontFamily: "Roboto, Helvetica, Arial, sans-serif"
  }),
  menu: base => ({
    ...base,
    color: "black",
    fontFamily: "Roboto, Helvetica, Arial, sans-serif"
  })
};


const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    boxShadow:
      "0px 0px 0px -1px rgba(0,0,0,0.2), 0px -1px 5px 0px rgba(0,0,0,0.14), 0px 1px 6px 0px rgba(0,0,0,0.12)",
    backgroundColor: styleBase.colors.white
  },
  tooBar: {
    minHeight: "unset"
  },
  menuButton: {
    marginRight: 15,
    display: "none"
  },
  title: {
    margin: '8px 15px',
    flexGrow: 1,
    color: styleBase.colors.colorsBaseProductDarkHover,
    fontFamily: styleBase.typography.types.inter,
    fontSize: styleBase.typography.font.medium
  },
  accountButton: {
    color: styleBase.colors.colorsBaseProductNormal,
    marginLeft: "10px"
  },
  "@media(max-width: 600px)": {
    menuButton: {
      display: "block"
    }
  }
});

const Header = ({ setIsSidebar, isSidebar }) => {
  const [school, setSchool] = useState([])
  const classes = useStyles();
  let history = useHistory();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const matches = useMediaQuery('(max-width:600px)')

  const handleMenu = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    localStorage.clear();
    history.push("/login");
    window.location.reload()

  };

  const { data: schoolRequest, isLoading } = useFetchRequestSchoolList();

  useEffect(() => {
    if (schoolRequest) {
      setSchool(schoolRequest)
    }
  }, [schoolRequest])

  return (
    <AppBar classes={{ root: classes.root }} position="static">
      <Toolbar className={classes.tooBar} disableGutters>
        {matches ? <MenuTwoTone onClick={
          () => {
            if (isSidebar) {
              setIsSidebar(false)
            } else {
              setIsSidebar(true)
            }
          }
        }

          style={{ color: 'black', marginLeft: '10px' }} /> : null}
        <h2 className={classes.title}>Matrícula</h2>
        <>

          {!isLoading ? <Grid item xs={3}> <Select
            styles={customStyles}
            className="basic-single"
            placeholder="Selecione a Escola"
            options={school}
            loadingMessage={isLoading ? "Carregando..." : null}
            onChange={selectedOption => {
              idSchool(selectedOption.inep_id);
              history.push("/")
              window.location.reload()

            }}
            defaultValue={schoolRequest.find(x => x.inep_id === getIdSchool())}
            getOptionValue={opt => opt.inep_id}
            getOptionLabel={opt => opt.inep_id + " - " + opt.name}
          />  </Grid> : <div style={{ margin: "auto" }}><CircularProgress /></div>}



          {isAuthenticated() && (
            <>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                fontSize="large"
                className={classes.accountButton}
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "left"
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left"
                }}
                open={open}
                onClose={handleClose}
              >
                <MenuItem value="sair" onClick={handleLogout}>Sair</MenuItem>
              </Menu>
            </>
          )}
        </>


      </Toolbar>
    </AppBar>
  );
};

export default Header;
