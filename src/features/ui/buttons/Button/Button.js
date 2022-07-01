import React from 'react';
import styled from 'styled-components';

const handleColor = color =>{
    switch (color){
        case "secondary":
            return "background-color:#EEEEF2; color:  #5C7190;"
        case "disabled":
            return "background-color:#CACACA; color:  #FFFFFF;"
        default:
            return "background-color:#198C9B; color:  #FFFFFF;"

    }
}
const Btn = styled.button`
  width: 31.2rem;
  height: 4rem;
  border-radius: 2rem ;
  padding: 1rem  13rem;
  ${({ color }) => handleColor(color)};
`
const Button = (props) => {
    return (
        <Btn>
            {props.text}
        </Btn>
    );
};

export default Button;