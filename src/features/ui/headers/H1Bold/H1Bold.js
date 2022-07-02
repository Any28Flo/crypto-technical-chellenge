import React from 'react';
import styled from 'styled-components';

const H1_bold = styled.h1`
    font: 700 2.4rem/2.9rem 'Inter';
    color: #000000;
    text-align: center;
`;
const H1Bold = ({ children }) => {
    return <H1_bold>{children}</H1_bold>;
};

export default H1Bold;
