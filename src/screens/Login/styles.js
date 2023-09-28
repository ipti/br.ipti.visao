import LoginImg from "../../assets/images/background-signup.png";

import LoginLups from "../../assets/images/lupasBackground.png";
import styleBase from "../../styles";

const useStyles = {

  contentLeft: {
    height: "100vh",
    width: "100vw",
    fontSize: styleBase.typography.font.small,
    color: styleBase.colors.white,
    background: `url(${LoginImg})`,
    backgroundSize: "cover",
    backgroundRepeat: "norepeat",
    display: "flex",
    // position: "fixed"

  },
  divBlue: {
    opacity: "0.5",
    background: `var(--0077B6, ${styleBase.colors.colorsBaseProductNormal})`,
    position: "absolute",
    height: "100%",
    width: "100%",
    zIndex: 0
  },
  divLupas: {
    opacity: "0.5",
    background: `url(${LoginLups})`,
    position: "absolute",
    height: "100%",
    width: "100%",
    zIndex: 1
  },
  divLogin: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "43px",
    margin: "auto",
    width: "40%",
    backgroundColor: "white",
    height: "auto", zIndex: "100"
  },
  textTitle: {
    color: "var(--00B4D8, #00B4D8)",
    textAlign: "center",
    fontfamily: "Poppins",
    fontSize: "36.164px",
    fontstyle: "normal",
    fontWeight: "800",
    margin: "0",
    padding: "0",
    lineheight: "101.5 %"
  },
  margin: {
    margin: "20px",
    position: "absolute"
  },
  marginMobile: {
    margin: 0
  },
  marginMobile20: {
    margin: 0
  },
  topBar: {
    width: "25%",
    height: "4px"
  },
  divInpus: {

    width: "80%",
  },
  titleLogin: {
    textAlign: "center",
    fontSize: "24px",
    marginBottom: "-15px",
    color: styleBase.colors.colorsBaseInkNormal,
    fontFamily: styleBase.typography.types.inter,
    fontWeight: "bold"
  },
  subTitleLogin: {
    textAlign: "center",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "14px",
    lineHeight: "21px",
    fontFamily: styleBase.typography.types.inter,
    color: styleBase.colors.colorsBaseInkLight,

  },
  imageLogin: {
    marginBottom: 20,
    display: "flex",
    flexDirection: "row",
    justifyContent: "end",
    marginLeft: "auto",
  },
  divtagna: {
    width: "100%"
  },
  imageTagna: {
    marginBottom: 20,
  },
  textCenter: {
    textAlign: "center"
  },
  linkRegister: {
    marginTop: 30,
    backgroundColor: styleBase.colors.white,
    border: "none",
    borderRadius: "5px",
    color: styleBase.colors.colorsBaseProductNormal,
    fontSize: styleBase.typography.font.small,
    fontFamily: styleBase.typography.types.bold,
    padding: "10px 20px",
    textDecoration: "none"
  },
  colorIcon: {
    color: styleBase.colors.grayClear
  },
  containerMain: { width: "100%" },
  titleBig: {
    fontSize: styleBase.typography.font.extraLarge,
    fontFamily: styleBase.typography.types.regular
  },
  resetPassword: {
    color: styleBase.colors.grayClear,
    fontSize: styleBase.typography.font.small,
    marginTop: 30,
    marginBottom: 30,
    width: "100%",

  },
  boxLeft: {
    position: "absolute",
    zIndex: "100",
    display: "flex"
  },
  boxRegister: {
    marginTop: 30
  },
  boxError: {
    height: 48,
    color: styleBase.colors.red
  },
  link: {
    fontFamily: styleBase.typography.types.bold,
    color: styleBase.colors.gray,
    textDecoration: "none",
    marginLeft: 5
  },
  formFieldError: {
    color: styleBase.colors.red,
    display: "block",
    marginBottom: 5
  },
  "@media(max-width: 1020px)": {
    imageTagna: {
      width: "400px",
    },
    titleBig: {
      fontSize: "22px"
    },
    imageLoginStyle: {
      width: "80%",
      height: "80%",
      marginLeft: "20%"
    },
  },
  "@media(max-width: 800px)": {
    marginTopContentLeft: {
      margin: "auto 0px",
      marginLeft: "0px"
    },
    boxRegister: {
      marginBottom: 40
    },
    divInpus: {
      width: "90%"
    },
    marginMobile20: {
      margin: "20px"
    },
    marginMobile: {
      margin: "40px"
    },
    divLogin: {
      justifyContent: "center"
    }
  },
  "@media(max-width: 600px)": {
    root: {
      backgroundSize: "60%"
    },
    divtagna: {
      display: "none"
    },
    divLogin: {
      width: "90%",
    },
    marginTopContentLeft: {
      margin: "15px 20px",
    },
    boxRegister: {
      marginBottom: 40
    }
  }
};

export default useStyles;
