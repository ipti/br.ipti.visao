import React from "react";


import { useMediaQuery } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { makeStyles } from "@material-ui/core/styles";
import { MenuTwoTone } from "@material-ui/icons";
import AccountCircle from "@material-ui/icons/AccountCircle";
import { useHistory } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { isAuthenticated } from "../../services/auth";
import styleBase from "../../styles";
import { Column, Row } from "../../styles/style";




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


  return (
    <AppBar classes={{ root: classes.root }} position="static">
      <Column>
        <Row>
          {matches ? <Column id="center">
            <MenuTwoTone onClick={
              () => {
                if (isSidebar) {
                  setIsSidebar(false)
                } else {
                  setIsSidebar(true)
                }
              }
            }
              style={{ color: 'black', marginLeft: '10px' }} /></Column> : null}
          <Column id="center">
            <img style={{ width: matches ? "128px" : "168px", padding: "8px 16px" }} alt="" src={logo} />
          </Column>
          <>
            {isAuthenticated() && (
              <>
                <Column
                  id="center"

                  onClick={handleMenu}
                  style={{ marginLeft: "auto" }}
                  className={classes.accountButton}
                >
                  <AccountCircle style={{ fontSize: "2.5rem", marginRight: "10px", cursor: "pointer" }} />
                </Column>
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
        </Row>
      </Column>
    </AppBar>
  );
};

export default Header;
