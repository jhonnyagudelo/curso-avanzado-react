import React, { useContext } from "react";
import { AppContext } from "../contex/AppContenx";
import UseForm from "../components/UseForm";
import { useRegisterMutation } from "../hooks/useRegisterMutation";

const NotRegisteredUser = () => {
  const { login } = useContext(AppContext);
  const { registerMutation } = useRegisterMutation();

  const onSubmit = ({ email, password }) => {
    debugger;
    const input = { email, password };
    registerMutation({ variables: input }).then(login);
  };

  return (
    <>
      <UseForm onSubmit={onSubmit} title="Registrar" />
      <UseForm onSubmit={onSubmit} title="Iniciar sesion" />
    </>
  );
};
export default NotRegisteredUser;
