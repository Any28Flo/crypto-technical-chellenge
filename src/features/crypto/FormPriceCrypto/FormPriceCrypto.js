import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Form = styled.form`
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    margin-bottom: 0.5rem;
    background-color: #f6f7f8;
    border-radius: 4rem;
    padding: 0.5rem 1rem;
    margin-top: 2rem;
`;
const InputRadio = styled.input`
    display: none;
    margin: 10px;
`;

const handleChecked = (checked) => {
  if(checked){
    return "color: #1BBCB2";
  }

};

const Label = styled.label`
    display: inline-block;
    background-color: #e7e7e7;
    border-color: #ddd;
    border-radius: 40px;
    color: #5c7190;
    padding: 1.1rem 1.2rem;
    font: 00 1.4rem/1.7rem 'Lato';
  ${({ checked }) => handleChecked(checked)};

`;

function FormPriceCrypto(props) {
    const { options } = props;
    const [value, setValue] = useState(options[0]);
    console.log(value);

    const handleChange = (e) => {
        const { value } = e.target.dataset;
        setValue(value);
    };
    useEffect(() => {
        console.log('render');
    }, [value]);
    return (
        <Form>
            {options.map((option) => {
                console.log(value === option);
                return (
                    <>
                        {' '}
                        <InputRadio
                            type="radio"
                            name="radios"
                            value={option}
                            checked={value === option}
                            onChange={handleChange}
                            key={`input-${option}`}
                        />
                        <Label
                          checked={value === option}

                          data-value={option}
                            onClick={handleChange}
                            key={option}
                        >
                            {option}
                        </Label>{' '}
                    </>
                );
            })}
        </Form>
    );
}

export default FormPriceCrypto;
