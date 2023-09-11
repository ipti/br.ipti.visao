import styleBase from "../../styles";

const useStyles = {
  contentBox: {
    border: "1px solid",
    borderRadius: "8px",
    borderColor: styleBase.colors.colorsBaseInkLight,
    padding: "20px",
    width: "88%",
    textDecoration: "none"
  },
  floatLeft: {
    float: "left"
  },
  floatRight: {
    float: "right"
  },
  textRight: {
    backgroundColor: styleBase.colors.colorsBaseProductNormal,
    color: styleBase.colors.white,
    padding: "5px 15px",
    borderRadius: "50px",
  },
  iconDelete: {
    cursor: "pointer",
  },
  iconHouse: {
    marginTop: "-5px",
    width: "40px",
    height: "30px",
    marginLeft: "auto"
  },
  addCursor: {
    cursor: "pointer"
  },
  subtitle: {
    fontSize: styleBase.typography.font.extraSmall,
    color: styleBase.colors.grayClear,
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis"
  },
  title: {
    color: styleBase.colors.colorsBaseInkNormalActive,
    fontSize: styleBase.typography.font.small,
    fontFamily: styleBase.typography.types.regular
  },
  boxWithoutImage: {
    marginBottom: 20
  },
  boxDescriptionCalssroom: {
    color: styleBase.colors.grayClear,
    fontSize: styleBase.typography.font.extraSmall,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    
  },
  boxDescriptionCalssroomTitle: {
    color: styleBase.colors.gray,
    fontSize: styleBase.typography.font.extraSmall,
    fontFamily: styleBase.typography.types.regular
  },
  boxDescriptionSchedule: {
    color: styleBase.colors.colorsBaseInkNormalActive,
    fontSize: styleBase.typography.font.extraSmall,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  boxDescriptionScheduleSubtitle: {
    color: styleBase.colors.gray,
    fontSize: styleBase.typography.font.extraSmall
  },
  marginBox: {
    marginRight: 10
  },
  boxQuantityBackground: {
    backgroundColor: styleBase.colors.colorsBaseProductNormal
  },
  boxQuantityBackgroundPink: {
    backgroundColor: styleBase.colors.pink
  },
  boxQuantity: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: styleBase.colors.white,
    fontSize: styleBase.typography.font.extraSmall,
    padding: "7px",
    borderRadius: 12,
    height: "20px",
    marginRight: 8,
    minWidth: 20,
    textAlign: "center"
  },
  boxVacancies: {
    color: styleBase.colors.white,
    borderRadius: 8,
    padding: 20,
    fontFamily: styleBase.typography.types.light
  },
  backgroundBlue: {
    backgroundColor: styleBase.colors.blue
  },
  backgroundPurple: {
    backgroundColor: styleBase.colors.colorsBaseProductNormal
  },
  backgroundPink: {
    backgroundColor: styleBase.colors.pink
  },
  quantity: {
    fontSize: styleBase.typography.font.large,
    marginTop: 50,
    marginBottom: 0
  },
  vacanciesTitle: {
    marginTop: 0
  },
  iconStudent: {
    display: 'flex',
    flexDirection: 'row',
    "& img": {
      width: "45px"
    }
  },
  boxStudent: {
    border: "1px solid",
    borderRadius: "8px",
    borderColor: styleBase.colors.colorsBaseProductNormal,
    fontFamily: styleBase.typography.types.light,
    width: "80%",
    padding: "10px",
    margin: '20px',
    "& h4": {
      fontFamily: styleBase.typography.types.light
    }
  },
  boxStudentConfirmation: {
    border: "1px solid",
    borderRadius: "8px",
    borderColor: styleBase.colors.colorsBaseProductNormal,
    fontFamily: styleBase.typography.types.light,
    padding: "20px",
    cursor: 'pointer',
    display: "flex",
    flexDirection: "column"
  },
  subtitleStudent: {
    color: styleBase.colors.colorsBaseInkNormalActive,
    fontSize: styleBase.typography.font.small,
    fontFamily: styleBase.typography.types.regular,
    marginBottom: 10
  },
  confimedCicle: {
    width: 10,
    height: 10,
    borderRadius: "50%",
    right: "14px",
    bottom: "8px",
    position: "absolute",
    backgroundColor: styleBase.colors.green
  },
  refusedCicle: {
    width: 10,
    height: 10,
    display: "block",
    borderRadius: "50%",
    right: "14px",
    bottom: "8px",
    position: "absolute",
    backgroundColor: styleBase.colors.red
  },
  nameStudent: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    fontSize: styleBase.typography.font.small,
    color: styleBase.colors.gray
  },
  boxStatusStudent: {
    border: "1px solid",
    borderRadius: "30px",
    borderColor: styleBase.colors.colorsBaseProductNormal,
    color: styleBase.colors.colorsBaseProductNormal,
    textAlign: "center",
    paddingTop: 10,
    paddingBottom: 10,
    width: "250px"
  },
  truncate: {
    width: "230px",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis"
    // "&:hover": {
    //   whiteSpace: "unset"
    // }
  },
  button: {
    backgroundColor: styleBase.colors.colorsBaseProductNormal,
    margin: 'auto 0px',
    border: "none",
    borderRadius: "50px",
    color: styleBase.colors.white,
    fontSize: styleBase.typography.font.small,
    fontFamily: styleBase.typography.types.light,
    cursor: 'pointer',
    transition: 'ease-in',
    textAlign: "center",
    padding: "8px 18px",
    outline: 'none',
    '&:hover': {
      backgroundColor: styleBase.colors.colorsBaseProductNormalHover
    }
  }
};
export default useStyles;
