import React, { useState, useEffect } from 'react';
import Button from '../../ui/buttons/Button/Button';
import styled from 'styled-components';

const Form = styled.form`
    display: flex;
    flex-direction: column;
    margin-top: 3.2rem;
    margin-bottom: 1.6rem;
`;
const TermsAndConditions = styled.p`
    font: 600 1.4rem/1.8rem 'Inter';
    color: #2c3747;
    text-align: center;
    margin-top: 12rem;
    margin-bottom: 1.6rem;
`;
const linkStyle = {
    color: '#198C9B',
};

const FormItem = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 1.6rem;
`;

const Label = styled.label`
    color: #4a4a4a;
    font: 400 1.6rem/1.9rem 'Lato';
    padding-left: 1.8rem;
`;
const Input = styled.input`
    border: 0.2rem solid #ffffff;
    background: #ffffff;
    box-shadow: 0rem 0rem 0rem rgba(0, 0, 0, 0.25);
    border-radius: 2.5rem;
    padding: 1.5rem 2rem;
    color: #4a4a4a;
    
    ::placeholder {
        color: #7b8186;
        font: 400 1.6rem/2rem 'Lato';
    }
    :focus-visible {
        outline: 0.2rem solid #198c9b;
    }
`;
const initState = {
    phone: '',
    email: '',
};
const formIsValid = {
    phone: false,
    email: false,
};
const FormRegister = () => {
    const [state, setState] = useState(initState);
    const [isValid, setIsValid] = useState(formIsValid);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setState({
            ...state,
            [name]: value,
        });
        validate(e);
    };
    const validate = (e) => {
        const { name, value } = e.target;
        let isOk;
        let re;
        switch (name) {
            case 'phone':
                re = /^[0-9]{1,10}$/;
                break;
            case 'email':
                re = /^\S+@\S+\.\S+$/;
                break;
        }

        if (re.test(value)) {
            isOk = true;
        } else {
            isOk = false;
        }

        setIsValid({
            ...isValid,
            [name]: isOk,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!(isValid.email && isValid.phone)) {
            //TODO : ADD error function
            console.log('Error');
            return;
        }
        //TODO : ADD submit function
        console.log('enviado');
    };

    useEffect(() => {

    }, [isValid]);

    return (
        <Form onSubmit={handleSubmit}>
            <FormItem>
                <Label>Ingresa tu celular</Label>
                <Input
                    type="text"
                    placeholder="a 10 dígitos"
                    name="phone"
                    value={state.phone}
                    onChange={handleChange}
                    showError={formIsValid.phone}
                />
            </FormItem>
            <FormItem>
                <Label>Y tu correo</Label>
                <Input
                    type="email"
                    placeholder="tucorreo@mail.com"
                    value={state.email}
                    name="email"
                    onChange={handleChange}
                />
            </FormItem>

            <TermsAndConditions>
                Al continuar, aceptas los {" "}
                <a href="#" style={linkStyle}>
                    términos y condiciones y el aviso de privacidad
                </a>
            </TermsAndConditions>

            <Button
                color={isValid.phone && isValid.email ? 'primary' : 'disabled'}
            >
                Iniciar sesión
            </Button>
        </Form>
    );
};

export default FormRegister;
