import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  padding: 4rem 2.7rem;
  background-color: #E5E5E5;
`
const Layout = ({children}) => {
    return (
        <Container>
            {children}
        </Container>
    );
};

export default Layout;