import Background from "../../assets/images/background-signup.png";
import styleBase from "../../styles";

const useStyles = {
    contentLeft: {
        width: "100%",
        height: "100%",
        fontSize: styleBase.typography.font.small,
        color: styleBase.colors.white,
        background: `url(${Background})`,
        backgroundRepeat: "norepeat",
        display: "flex",
        position: "fixed"
    },
    divBlue: {
        background: "linear-gradient(0deg, #3F45EA, #3F45EA)",
        opacity: 0.94,
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
        height: "100%",
        position: "relative", zIndex: "100"
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
        color: styleBase.colors.white,
        zIndex: "100",
        fontSize: styleBase.typography.font.small,
        fontFamily: styleBase.typography.types.inter,
        paddingTop: 40,
        paddingBottom: 40,
        marginRight: 20,
        display: "flex",
        flexDirection: "column",
        justifyContent: "start",
        position: "absolute",
        alignItems: "end",
        width: "98%"
    },
    buttonLogin: {
        borderStyle: "solid",
        border: "1px",
        borderRadius: "25px",
        padding: "10px",
        fontFamily: styleBase.typography.types.regular,
    },
    textTitle: {
        fontFamily: styleBase.typography.types.regular,
        color: styleBase.colors.white,
        fontSize: styleBase.typography.font.large,
    },
    boxRegister: {
        marginTop: 30
    },
    link: {
        fontFamily: styleBase.typography.types.bold,
        color: styleBase.colors.white,
        textDecoration: "none",
        marginLeft: 5
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
    "@media(max-width: 1300px)": {
        resetPassword: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "start",
            fontSize: 14,
            position: "absolute",
            alignItems: "end",
            width: "98%"
        },
    },
    "@media(max-width: 740px)": {
        divImage: {
            width: "100%",
            position: "relative"
        },
        textTitle: {
            fontFamily: styleBase.typography.types.regular,
            color: styleBase.colors.white,
            fontSize: 25,
        },
    },
    "@media(max-width: 639px)": {
        resetPassword: {
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "end",
            background: "linear-gradient(180deg, rgba(71, 77, 232, 0) 0%, #474DE8 100%)",
            padding: "20px 0px",
            height: "200px",
            position: "relative",
            width: "100%"
        },
        divImage: {
            height: "100%",
            marginTop: "auto",
            position: "absolute",
        },
        imgTagna: {
            width: "460px",
        },
        textTitle: {
            fontFamily: styleBase.typography.types.normal,
            fontWeight: "500",
            color: styleBase.colors.white,
            fontSize: 42,
            textAlign: "center"
        },
        formSignUp: {
            justifyContent: "start",
            marginTop: "25vh",
        },
        "@media(max-height: 700px)": {
            formSignUp: {
                marginTop: "10vh",
            }
        },
    },

    "@media(max-width: 1020px)": {
        divImage: {
            width: "70%"
        },
        textTitle: {
            fontFamily: styleBase.typography.types.regular,
            color: styleBase.colors.white,
            fontSize: 25,
        },
        imageLoginStyle: {
            width: "100%",
            marginLeft: "20%"
        },
    },
};

export default useStyles;
