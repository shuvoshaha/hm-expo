import React, { useEffect, useState, createContext } from 'react';
import axios from 'axios';

//Global Context
export const contexAPI = createContext();

const GlobalState = ({ children }) => {
    const [country, setCountry] = useState([]);
    const [err, setErr] = useState(false);
    const [img, setImg] = useState([]);

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

    useEffect(() => {
       axios.get('https://pixabay.com/api/?key=20055481-747d5a5045dd80c339cb1387d&q=yellow+flowers&image_type=photo')
       .then(res =>{
           setImg(res.data.hits)
       })
    }, [])

    console.log(img)
    
    return (
        <contexAPI.Provider value={{ country, img }}>
            { children }
        </contexAPI.Provider>
    )
}

export default GlobalState;
