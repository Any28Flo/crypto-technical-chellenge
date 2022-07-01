import React from 'react';
import styled from 'styled-components';

const H1= styled.h2`
    font: 700 2.4rem/2.8rem "Inter";
    color: #2C3747;
`
const PrimaryHeader = ({value}) => {
    return (
        <H1>
            {value}
        </H1>
    );
};

export default PrimaryHeader;