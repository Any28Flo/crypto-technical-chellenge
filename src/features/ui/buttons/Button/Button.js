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
    //padding-top: 1rem;
    vertical-align: middle;
    //padding-bottom: 1rem;
    border: none;
    font: 600 1.4rem/1.8rem 'Inter';
    ${({ color }) => handleColor(color)};
    width: 100%;
`;


export default Btn;
