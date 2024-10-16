import LoginLups from "../../../assets/images/lupasBackground.png";
import styleBase from "../../../styles";

const useStyles = {
  contentLeft: {
    height: "100vh",
    width: "100vw",
    fontSize: styleBase.typography.font.small,
    color: styleBase.colors.white,
    display: "flex",
  },
  divBlue: {
    opacity: "0.5",
    background: `var(--0077B6, ${styleBase.colors.colorsBaseProductNormal})`,
    position: "absolute",
    height: "100%",
    width: "100%",
    zIndex: 0,
  },
  divLupas: {
    opacity: "0.5",
    background: `url(${LoginLups})`,
    position: "absolute",
    height: "100%",
    width: "100%",
    zIndex: 1,
  },
  formTermo: {
    display: "flex",
    flexDirection: "column",
    borderRadius: "43px",
    // boxShadow:
    //   "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
    // margin: "auto",
    backgroundColor: "transparent",
    zIndex: "100",
    padding: 32,
  },
  divImage: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "end",
    position: "relative",
    zIndex: "100",
  },
  imgTagna: {
    width: "90%",
  },
  resetPassword: {
    color: styleBase.colors.colorsBaseProductNormalHover,
    textDecoration: "none",
    zIndex: "100",
    fontSize: styleBase.typography.font.small,
    fontFamily: styleBase.typography.types.inter,
    paddingTop: 40,
    paddingBottom: 40,
    marginRight: 20,
    display: "flex",
    flexDirection: "column",
    justifyContent: "end",
    alignItems: "center",
    width: "98%",
  },
  buttonLogin: {
    borderStyle: "solid",
    border: "1px",
    borderRadius: "25px",
    textDecoration: "none",
    padding: "10px",
    fontFamily: styleBase.typography.types.regular,
  },
  textTitle: {
    color: "var(--00B4D8, #00B4D8)",
    textAlign: "center",
    fontfamily: "Poppins",
    fontSize: "24px",
    fontstyle: "normal",
    fontWeight: "800",
    margin: "0",
    padding: "0",
    lineheight: "101.5 %",
  },
  textPar: {
    color: "black",
    textAlign: "center",
    fontfamily: "Poppins",
    fontSize: "14px",
    fontstyle: "normal",
    fontWeight: "500",
    margin: "0",
    padding: "0",
  },
  boxRegister: {
    marginTop: 16,
  },
  link: {
    fontFamily: styleBase.typography.types.bold,
    backgroundColor: styleBase.colors.white,
    color: styleBase.colors.colorsBaseProductNormalHover,
    textDecoration: "none",
    marginLeft: 5,
  },
  linkRegister: {
    marginTop: 30,
    backgroundColor: styleBase.colors.colorsBaseProductNormal,
    border: "none",
    borderRadius: "5px",
    color: styleBase.colors.white,
    fontSize: styleBase.typography.font.small,
    fontFamily: styleBase.typography.types.bold,
    padding: "10px 20px",
    textDecoration: "none",
  },
  "@media(max-width: 900px)": {
    formSignUp: {
      width: "90%",
      flexDirection: "space-between",
    },
  },
};

export default useStyles;
