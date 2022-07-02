import React from 'react';
import styled from 'styled-components';

const handleColor = (color) => {
    switch (color) {
        case 'secondary':
            return 'background-color:#EEEEF2; color:  #5C7190;';
        case 'disabled':
            return 'background-color:#CACACA; color:  #FFFFFF;';
        default:
            return 'background-color:#198C9B; color:  #FFFFFF;';
    }
};
const Btn = styled.button`
    height: 4rem;
    border-radius: 2em;
    padding: 1rem 13rem;
    border: none;
    font: 600 1.4em/1.8em 'Inter';
    ${({ color }) => handleColor(color)};
`;
const Button = ({ children }) => {
    return <Btn>{children}</Btn>;
};

export default Button;
