import React from 'react';
import styled from 'styled-components';
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
    box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.25);
    border-radius: 2.5rem;
    padding: 1.5rem 2rem;
    color: #4a4a4a;

    ::placeholder {
        color: #7b8186;
        font: 400 1.6rem/2rem 'Lato';
    }
`;

const UseInput = (labelText, typeInput, placeholder, validate) => {
    const FormInput = () => {
        return (
            <FormItem>
                <Label>{labelText}</Label>
                <Input
                    type={typeInput}
                    placeholder={placeholder}
                    onChange={validate}
                />
            </FormItem>
        );
    };
    return [FormInput];
};

export default UseInput;
