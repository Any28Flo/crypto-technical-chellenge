import React, {createContext, useState} from "react";

const CryptoContext = createContext();

const initState = {
  actualPrice:0,
  currency:""
}

const CryptoProvider = ({children}) => {

  const [cryptoState, setCryptoState] = useState(initState);

  const handleChange = e =>{
    const { value } = e.target.dataset;
    setCryptoState({
      ...cryptoState,
      currency: value
    })
  }
  const data = { cryptoState, handleChange }
  
  return (
    <CryptoContext.Provider value={data}>
      {children}
    </CryptoContext.Provider>
  )
}
export {CryptoContext}
export default CryptoProvider;