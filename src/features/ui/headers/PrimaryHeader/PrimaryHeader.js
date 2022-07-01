import React from 'react';
import styled from 'styled-components';

const H1= styled.h1`
    font: 600 2.4rem/2.9rem "Inter";
    color: #5C7190;
`
const PrimaryHeader = ({value}) => {
    return (
       <H1>
           {value}
       </H1>
    );
};

export default PrimaryHeader;