import React, { useEffect } from "react";

import { useMediaQuery } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { makeStyles } from "@material-ui/core/styles";
import { MenuTwoTone } from "@material-ui/icons";
import AccountCircle from "@material-ui/icons/AccountCircle";
import { useHistory } from "react-router-dom";
import logo from "../../assets/images/logo.svg";
import { isAuthenticated } from "../../services/auth";
import styleBase from "../../styles";
import { Column, Row } from "../../styles/style";
import api from "../../services/api";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    boxShadow:
      "0px 0px 0px -1px rgba(0,0,0,0.2), 0px -1px 5px 0px rgba(0,0,0,0.14), 0px 1px 6px 0px rgba(0,0,0,0.12)",
    backgroundColor: styleBase.colors.white,
  },
  tooBar: {
    minHeight: "unset",
  },
  menuButton: {
    marginRight: 15,
    display: "none",
  },
  title: {
    margin: "8px 15px",
    flexGrow: 1,
    color: styleBase.colors.colorsBaseProductDarkHover,
    fontFamily: styleBase.typography.types.inter,
    fontSize: styleBase.typography.font.medium,
  },
  accountButton: {
    color: styleBase.colors.colorsBaseProductNormal,
    marginLeft: "10px",
  },
  "@media(max-width: 600px)": {
    menuButton: {
      display: "block",
    },
  },
});



const Header = ({ setIsSidebar, isSidebar }) => {
  const classes = useStyles();
  let history = useHistory();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [user, setUser] = React.useState(null);
  const open = Boolean(anchorEl);
  const matches = useMediaQuery("(max-width:600px)");

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    localStorage.clear();
    history.push("/login");
    window.location.reload();
  };

  useEffect(() => {
    const callFunction = async () => {
      try {
        const result = await api.get("/findOneUser");
        setUser(result.data);

      } catch (error) {
        console.error("Error calling function:", error);
      }
    };
    callFunction();
  }, []);

  return (
    <AppBar classes={{ root: classes.root }} position="static">
      <Column>
        <Row>
          {matches ? (
            <Column id="center">
              <MenuTwoTone
                onClick={() => setIsSidebar(!isSidebar)}
                style={{ color: "black", marginLeft: "10px" }}
              />
            </Column>
          ) : null}

          <Column id="center">
            <img
              style={{
                width: matches ? "128px" : "168px",
                padding: "8px 16px",
              }}
              alt=""
              src={logo}
            />
          </Column>

          {isAuthenticated() && (
            <>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginLeft: "auto",
                  marginRight: "10px", // Margem à direita de 10px
                  cursor: "pointer",
                }}
                className={classes.accountButton}
                onClick={handleMenu}
              >
                {/* Nome do Usuário */}
                <span
                  style={{
                    marginRight: "10px",
                    fontSize: "1rem",
                    fontWeight: "bold",
                  }}
                >
                  {user?.name} 
                  {/* nome do usuário */}
                </span>

                {/* Ícone da Conta */}
                <AccountCircle style={{ fontSize: "2.5rem" }} />
              </div>

              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={open}
                onClose={handleClose}
              >
                <MenuItem value="sair" onClick={handleLogout}>
                  Sair
                </MenuItem>
              </Menu>
            </>
          )}
        </Row>
      </Column>
    </AppBar>
  );
};

export default Header;
