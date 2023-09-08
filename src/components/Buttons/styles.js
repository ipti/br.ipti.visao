import styleBase from "../../styles";

const useStyles = {
  buttomWhite: {
    backgroundColor: styleBase.colors.white,
    border: "none",
    borderRadius: "5px",
    color: styleBase.colors.colorsBaseProductNormal,
    fontSize: styleBase.typography.font.small,
    fontFamily: styleBase.typography.types.bold,
    cursor: 'pointer',
    transition: 'ease-in',
    outline: 'none'
  },
  buttomPurple: {
    backgroundColor: styleBase.colors.colorsBaseProductNormal,
    border: "none",
    borderRadius: "50px",
    color: styleBase.colors.white,
    fontSize: styleBase.typography.font.medium,
    fontFamily: styleBase.typography.types.light,
    textAlign: "center",
    padding: "8px 18px",
    cursor: 'pointer',
    transition: 'ease-in',
    outline: 'none',

    '&:hover': {
      backgroundColor: styleBase.colors.colorsBaseProductNormalHover
    }
  },
  buttomGreen: {
    backgroundColor: styleBase.colors.green,
    border: "none",
    borderRadius: "50px",
    color: styleBase.colors.white,
    fontSize: styleBase.typography.font.medium,
    fontFamily: styleBase.typography.types.light,
    width: "100%",
    textAlign: "center",
    padding: "8px 18px",
    cursor: 'pointer',
    transition: 'ease-in',
    outline: 'none',

    '&:hover': {
      backgroundColor: '#41CD4D',
    }
  },
  buttomLinePurple: {
    border: "1px solid",
    backgroundColor: styleBase.colors.white,
    borderColor: styleBase.colors.colorsBaseProductNormal,
    color: styleBase.colors.colorsBaseProductNormal,
    fontSize: styleBase.typography.font.medium,
    fontFamily: styleBase.typography.types.light,
    textAlign: "center",
    // padding: "6px 10px",
    cursor: 'pointer',
    transition: 'ease-in',
    outline: 'none',
    width: "100%",

    '&:hover': {
      boxShadow: `0 0 1px 1px ${styleBase.colors.colorsBaseProductNormal};`
    }
  }
};

export default useStyles;
