import React, { useContext } from 'react';
import { CountryAPI } from '../GlobalState';


const Filter = () => {
    const { country } = useContext(CountryAPI);

    return (
        <>
            { country.map((data, indx)=> {
                return( <li key={indx}> {data.name} </li>
                   
                )
            })}
        </>
    )
}

export default Filter
