import React from 'react';
import PrimaryHeader from '../../features/ui/headers/PrimaryHeader/PrimaryHeader';
import DataFlatline from '../../features/images/DataFlatline';
import H1Bold from '../../features/ui/headers/H1Bold/H1Bold';
import Button from '../../features/ui/buttons/Button/Button';
import styled from 'styled-components';

const OnboardingPage = styled.div`
    background-color: #e4f2f2;
    font: 400 1.7rem/2.4rem 'Lato';
    padding-top: 3.9rem;
`;

const OnBoardingImgContainer = styled.div`
    margin-top: 3.7rem;
    margin-bottom: 6.1rem;
`;

const OnboardingText = styled.div`
    border-radius: 60px 0px 0px 0px;
    background-color: #ffffff;
    padding-top: 3.4rem;
    padding-bottom: 3.4rem;
`;

const OnboardingValueParagraph = styled.p`
    text-align: justify;
    margin: 2.4rem 3.7rem 3.7rem 3.7rem;
    text-align: center;
`;

const Onboarding = () => {
    return (
        <OnboardingPage>
            <PrimaryHeader>Bitcoin APP</PrimaryHeader>
            <OnBoardingImgContainer>
                <DataFlatline width={'283'} height={'203'} />
            </OnBoardingImgContainer>
            <OnboardingText>
                <H1Bold>¿Cuál es el valor actual del BTC?</H1Bold>
                <OnboardingValueParagraph>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                </OnboardingValueParagraph>
                <Button>Iniciar</Button>
            </OnboardingText>
        </OnboardingPage>
    );
};

export default Onboarding;
