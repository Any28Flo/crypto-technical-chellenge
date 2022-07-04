import styled from "styled-components";

const Input = styled.input`
    border: 0.2rem solid #ffffff;
    background: #ffffff;
    box-shadow: 0rem 0rem 0rem rgba(0, 0, 0, 0.25);
    border-radius: 2.5rem;
    padding: 1.5rem 2rem;
    color: #4a4a4a;
    width:100%;
  
    ::placeholder {
        color: #7b8186;
        font: 400 1.6rem/2rem 'Lato';
    }
    :focus-visible {
        outline: 0.2rem solid #198c9b;
    }
`;
export default Input;