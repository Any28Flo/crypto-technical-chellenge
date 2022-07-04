import React from 'react';
import styled from 'styled-components';
import PrimaryHeader from '../../features/ui/headers/PrimaryHeader/PrimaryHeader';
import SecondaryHeader from '../../features/ui/headers/SecondaryHeader/SecondaryHeader';
import FormRegister from '../../features/users/FormRegiter/FormRegister';
import Button from '../../features/ui/buttons/Button/Button';

const RegisterPage = styled.div`
    background-color: #E5E5E5;
    font: 400 1.7rem/2.4rem 'Lato';
    padding: 4rem 2.4rem 3.2rem 2.4rem;
`;
const FormContainer = styled.div`
    margin-bottom: 1.6rem;
    margin-top: 3.2rem;
`;
const TitlePageContainer = styled.div`
    margin-top: 4.7rem;
`;
const Register = () => {
    //TODO remove layuout component
    return (
        <RegisterPage>
            <PrimaryHeader>Bitcoin APP</PrimaryHeader>
            <TitlePageContainer>
                <SecondaryHeader>Crea tu cuenta</SecondaryHeader>
            </TitlePageContainer>
            <FormContainer>
                <FormRegister />
            </FormContainer>
            <Button color="disabled">Crear cuenta</Button>
        </RegisterPage>
    );
};

export default Register;
