import React from 'react';
import styled from "styled-components";
import PrimaryHeader from "../../features/ui/headers/PrimaryHeader/PrimaryHeader";
import SecondaryHeader from "../../features/ui/headers/SecondaryHeader/SecondaryHeader";

const RegisterPage = styled.div`
    background-color: #e4f2f2;
    font: 400 1.7rem/2.4rem 'Lato';
    padding-top: 3.9rem;
`;
const Register = () => {
    //TODO remove layuout component
    return (
        <RegisterPage>
            <PrimaryHeader>Bitcoin APP</PrimaryHeader>
            <SecondaryHeader>Crea tu cuenta</SecondaryHeader>

        </RegisterPage>
    );
};

export default Register;