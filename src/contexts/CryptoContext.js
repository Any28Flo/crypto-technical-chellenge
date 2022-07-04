import React, {createContext, useState} from "react";
import blockChangeApi from "../helpers/BlockChangeApi";

const CryptoContext = createContext();

const initState = {
  actualPrice:0,
  currency:"",
  error: "",
  loading: false
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
  const handleSubmit = async e => {
    e.preventDefault();
    setCryptoState({
      ...cryptoState,
      loading: true
    })

    try {
      const data = await blockChangeApi.getCurrentValue(cryptoState.currency);

      setCryptoState({
        ...cryptoState,
        loading: false,
        actualPrice: data.last_trade_price
      })

    } catch (e) {
      setCryptoState({
        ...cryptoState,
        error: e
      })
    }

  }
  const data = { cryptoState, handleChange, handleSubmit }

  return (
    <CryptoContext.Provider value={data}>
      {children}
    </CryptoContext.Provider>
  )
}
export {CryptoContext}
export default CryptoProvider;