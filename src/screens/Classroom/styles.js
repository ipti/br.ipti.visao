import styleBase from "../../styles";

const useStyles = {
  title: {
    marginTop: 0,
    marginBottom: 3,
    color: styleBase.colors.colorsBaseInkNormalActive,
    fontSize: "4vh",
    fontFamily: styleBase.typography.types.inter,
    fontWeight: "unset"
  },
  name: {
    color: styleBase.colors.gray,
    marginTop: 30,
    marginBottom: 0,
    fontSize: styleBase.typography.font.small,
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis'
  },
  boxTitlePagination: {
    marginBottom: 20
  },
  formControl: {
    width: "80%",
    marginBottom: 60,
    "& label": {
      marginBottom: 10
    }
  },
  boxContent: {
    marginTop: 30
  },
  inputStudent: {
    width: "100%"
  },
  priority: {
    borderRadius: "16px",
    backgroundColor: styleBase.colors.colorsBaseProductNormal,
    color: styleBase.colors.white,
    display: "flex",
    flexDirection: "row",
    width: "156px",
    justifyContent: "center"
  },
  marginTop: {
    marginTop: "20px"
  },
  boxContentRegistration: {
    marginTop: 90,
    marginBottom: 30
  },
  marginZero: {
    margin: "0"
  },
  floatLeft: {
    float: "left"
  },
  floatRight: {
    float: "right"
  },
  label: {
    color: "#000",
    fontWeight: "700",
    margin: "16px 0",
    fontSize: 24
  },
  iconStudent: {
    borderRadius: "6px",
    backgroundColor: styleBase.colors.blueClear,
    width: "50px",
    marginRight: 15
  },
  iconResponsable: {
    borderRadius: "6px",
    backgroundColor: styleBase.colors.purple,
    width: "28px",
    padding: "5px 10px 0 10px",
    marginRight: 15
  },
  iconHouse: {
    borderRadius: "6px",
    backgroundColor: styleBase.colors.purple,
    width: "30px",
    padding: "6px 10px 6px 10px",
    marginRight: 15
  },
  iconClassroom: {
    borderRadius: "6px",
    backgroundColor: styleBase.colors.pink,
    width: "30px",
    padding: "10px 4px 10px 10px",
    marginRight: 15
  },
  lineGrayClean: {
    backgroundColor: styleBase.colors.grayClearOne,
    display: "block",
    width: "100%",
    height: 2,
    margin: "30px 0"
  },
  addStage: {
    position: "fixed",
    right: 20,
    bottom: 20
  },
  boxButtons: {
    marginTop: 100,
    justifyContent: 'start'
  },
  spaceBetween: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  "@media(max-width: 600px)": {
    title: {
      fontSize: "16px"
    }
  }

};

export default useStyles;
