import React, { useEffect, useState, createContext } from 'react';
import axios from 'axios';

//Global Context
export const CountryAPI = createContext();

const GlobalState = ({ children }) => {
    const [country, setCountry] = useState([]);
    const [err, setErr] = useState(false);

    //API Call
    useEffect(()=>{
        setErr(true);
         axios.get('https://restcountries.eu/rest/v2/all')
        .then(res =>{
            setCountry(res.data);
            setErr(false);
        })
        .catch(err =>{
            console.log(err);
        })
    }, []);
    // console.log(country);
    
    return (
        <CountryAPI.Provider value={{ country }}>
            { children }
        </CountryAPI.Provider>
    )
}

export default GlobalState;
