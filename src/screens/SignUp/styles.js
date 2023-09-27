import Background from "../../assets/images/background-signup.png";
import styleBase from "../../styles";

const useStyles = {
    contentLeft: {
        height: "100vh",
        width: "100vw",
        fontSize: styleBase.typography.font.small,
        color: styleBase.colors.white,
        background: `url(${Background})`,
        backgroundSize: "cover",
        backgroundRepeat: "norepeat",
        display: "flex",
        position: "fixed"
    },
    divBlue: {
        opacity: "0.5",
        background: `var(--0077B6, ${styleBase.colors.colorsBaseProductNormalHover})`,
        position: "absolute",
        height: "100%",
        width: "100%",
        zIndex: 0
    },
    formSignUp: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "43px",
        margin: "auto",
        width: "40%",
        backgroundColor: "white",
        height: "80%", zIndex: "100"
    },
    divImage: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "end",
        position: "relative", zIndex: "100"
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
        width: "98%"
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
        fontSize: "36.164px",
        fontstyle: "normal",
        fontWeight: "800",
        margin: "0",
        padding: "0",
        lineheight: "101.5 %"
    },
    boxRegister: {
        marginTop: 30
    },
    link: {
        fontFamily: styleBase.typography.types.bold,
        backgroundColor: styleBase.colors.white,
        color: styleBase.colors.colorsBaseProductNormalHover,
        textDecoration: "none",
        marginLeft: 5
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
        textDecoration: "none"
    },
    "@media(max-width: 900px)": {
        formSignUp: {
            width: "80%",
            height: "60%",
            flexDirection: "space-between"
        },
    }


};

export default useStyles;
