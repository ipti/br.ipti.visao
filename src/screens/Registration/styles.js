import styleBase from "../../styles";
import LoginImg from "../../assets/images/lupaLogo.svg";
const useStyles = {
  backgroundForm: {
    minWidth: "100%",
    minHeight: "100%",
    fontFamily: styleBase.typography.types.light,
    background: `url(${LoginImg})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: 'right top'
  },
  contentStart: {
    color: styleBase.colors.grayClear,
    fontFamily: styleBase.typography.types.light,
    textAlign: "center",
    fontSize: styleBase.typography.font.small,
    "& p": {
      margin: 0
    },
    "& h1": {
      color: styleBase.colors.gray,
      fontSize: styleBase.typography.font.medium
    }
  },
  contentForm: {
    color: styleBase.colors.grayClear,
    fontFamily: styleBase.typography.types.light,
    fontSize: styleBase.typography.font.small,
    "& p": {
      margin: 0
    },
    "& h1": {
      color: styleBase.colors.gray,
      fontSize: styleBase.typography.font.medium
    }
  },
  imageRegistration: {
    height: "50%",
    width: "50%"
  },
  imgTag: {
    width: "5%",
    margin: "20px",
    position: "relative"
  },
  backButton: {
    width: "2%",
    marginLeft: "20px",
    position: "relative",
    cursor: "pointer"
  },
  topBar: {
    width: "25%",
    height: "4px"
  },
  marginButtom: {
    marginBottom: 40
  },
  marginTop: {
    marginTop: 40
  },
  marginTop30: {
    marginTop: 30
  },
  marginLeftButton: {
    marginLeft: 20
  },
  selectField: {
    height: 40
  },
  contentMain: {
    width: "100%"
  },
  formGroup: {
    "& span": {
      color: styleBase.colors.gray
    }
  },
  formFieldError: {
    marginTop: 10,
    color: styleBase.colors.gray,
    fontSize: styleBase.typography.font.small,
    display: "block",
    fontFamily: styleBase.typography.types.light
  },
  textField: {
    width: "100%",
    marginTop: 20,
    "& label": {
      marginBottom: 10
    },
    background: "white",
  },
  formControl: {
    width: "100%",
    marginTop: 20,
    "& label": {
      marginBottom: 10
    }
  },
  boxNumberRegistration: {
    background: styleBase.colors.grayClear,
    color: styleBase.colors.gray,
    borderRadius: "8px",
    fontFamily: styleBase.typography.types.semiBold,
    paddingTop: 10,
    paddingBottom: 10,
    marginTop: 80
  },
  "@media(max-width: 600px)": {
    backgroundForm: {
      backgroundSize: "50%"
    },
    imgTag: {
      width: "15%"
    },
    backButton: {
      width: "8%",
      marginLeft: "20px",
      position: "relative"
    },
    imageRegistration: {
      height: "80%",
    width: "80%"
    }
  }
};

export default useStyles;
