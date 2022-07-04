import React from 'react';
import styled from 'styled-components';
import Subtitle from '../../features/ui/headers/Subtitle';
import Button from "../../features/ui/buttons/Button/Button";

const HomePage = styled.div`
    background-color: #e5e5e5;
    font: 400 1.7rem/2.4rem 'Lato';
    padding: 0rem 2.4rem 3.2rem 2.4rem;
`;
const PageHeader = styled.div`
    background-color: #ffffff;
    color: #7b8186;
    font: 400 1.4rem/1.6rem 'Lato';
    padding-top: 2rem;
    padding-bottom: 2rem;
    text-align: center;
`;
const Home = () => {
    return (
        <>
            <PageHeader>Resumen Bitcoin</PageHeader>
            <HomePage>
                <Subtitle>Valor de Bitcoin actual</Subtitle>
                <div></div>
                <div className="details"></div>
                <Button>Actualizar</Button>
            </HomePage>
        </>
    );
};

export default Home;
