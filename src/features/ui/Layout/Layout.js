import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    padding: 4rem 2.7rem;
    background-color: #e5e5e5;
    font-family: 'Inter';
`;
const Layout = ({ children }) => {
    return <Container>{children}</Container>;
};

export default Layout;
