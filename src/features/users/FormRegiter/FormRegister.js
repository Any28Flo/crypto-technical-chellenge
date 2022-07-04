import React from "react";
import useInput from "../../../hooks/useInput";
import styled from "styled-components";
import Button from "../../ui/buttons/Button/Button";

const Form = styled.form`
  color: red;
  display: flex;
  flex-direction: column;
  margin-top: 3.2rem;
`;
const TermsAndConditions = styled.p`
  font: 600 1.4rem/1.8rem "Inter";
  color: #2C3747;
  text-align: center;
  margin-top: 12rem;
  margin-bottom: 1.6rem;

`
const linkStyle = {
  color: "#198C9B"

  };

const FormRegister = () => {
  const  [InputPhone ]= useInput("Ingresa tu celular", "text", "a 10 dígitos");
  const  [InputEmail]= useInput("Y tu correo", "email", "tucorreo@mail.com");

  const handleSubmit = e =>{
    console.log(e );
  }
  return (
    <Form onSubmit={handleSubmit}>
      <InputPhone />
      <InputEmail />
      <TermsAndConditions>
        {"Al continuar, aceptas los "}
        <a href="#" style={linkStyle}>
          términos y condiciones y el aviso de privacidad
        </a>
      </TermsAndConditions>
      <Button  color="secondary">Iniciar sesión</Button>
    </Form>
  );
};

export default FormRegister;