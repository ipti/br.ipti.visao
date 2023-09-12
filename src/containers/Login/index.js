import React from "react";
import * as Yup from "yup";
import Login from "../../screens/Login/Login";

const SignIn = () => {
 

  const validationSchema = Yup.object().shape({
    email: Yup.string().required("Email é obrigatório!"),
    password: Yup.string()
      .min(6, "Senha deve ter no mínimo 6 caracteres")
      .required("Senha é obrigatória!")
  });

  let initialValues = {
    email: "",
    password: ""
  };

  return (
    <Login
      initialValues={initialValues}
      validationSchema={validationSchema}
    />
  );
};

export default SignIn;
