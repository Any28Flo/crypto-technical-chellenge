import React from 'react';
import styled from 'styled-components';

const H1 = styled.h1`
    font: 600 2.4rem/2.9rem 'Inter';
    color: #5c7190;
    text-align: center;
`;

const PrimaryHeader = ({ children }) => {
    return <H1>{children}</H1>;
};

export default PrimaryHeader;
