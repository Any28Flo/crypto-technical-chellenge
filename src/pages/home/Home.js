import React, {useContext} from 'react';
import styled from 'styled-components';
import Subtitle from '../../features/ui/headers/Subtitle';
import Button from '../../features/ui/buttons/Button/Button';
import FormPriceCrypto from '../../features/crypto/FormPriceCrypto/FormPriceCrypto';
import Input from '../../features/ui/Form/Input';
import { CryptoContext } from "../../contexts/CryptoContext";

const handleColor = (color) => {
    switch (color) {
        case 'white':
            return 'background-color:#FFFFFF;';
        case 'primary':
            return 'background-color: #F6F7F8;';
    }
};
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
const Card = styled.div`
    padding: 1.6rem 2.1rem;
    border-radius: 2rem;
    margin-top: 2.4rem;
    box-shadow: 0rem 4rem 16rem rgba(36, 22, 77, 0.1);
    ${({ color }) => handleColor(color)};
`;

const H3 = styled.h3`
    font: 400 1.6rem/1.6rem 'Lato';
    text-align: center;
`;
const H3Bold = styled.h3`
    font: 600 1.6rem/2.4rem 'Lato';
    text-align: left;
    color: #198c9b;
`;
const Footer = styled.div`
    margin-top: 12rem;
`;

const handleSubmit = (e) => {
    console.log('sd');
    console.log(e);
};

function Home() {
    const currencies = ['USD', 'GBP', 'EUR'];
    const {  cryptoState } = useContext(CryptoContext);
    console.log(cryptoState);
    return (
      <>
            <PageHeader>Resumen Bitcoin</PageHeader>
            <HomePage>
                <Subtitle>Valor de Bitcoin actual</Subtitle>
                <Card color="white">
                    <H3>Moneda</H3>
                    <FormPriceCrypto
                        options={currencies}
                        handleSubmit={handleSubmit}
                    />
                </Card>
                <Card color="primary">
                    <H3Bold>Detalle</H3Bold>
                    <p>United States Dollar</p>
                    <Input type="text" disabled value={cryptoState?.actualPrice}/>
                </Card>
                <Footer>
                    <Button onClick={handleSubmit}>Actualizar</Button>
                </Footer>
            </HomePage>
        </>
    );
}

export default Home;
