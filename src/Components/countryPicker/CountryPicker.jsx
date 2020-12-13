import React,{useState,useEffect} from 'react'
import {NativeSelect,FormControl} from '@material-ui/core';
import {fetchCountry} from '../../api/index.js';
import styles from './countryPicker.module.css';

const CountryPicker= ({handleCountryChange}) => {
    const [Countries,setCountries] =useState([]);
    useEffect(() =>{
        const fetchAPI = async() =>
        {

            setCountries(await fetchCountry());
        
        }
        fetchAPI();

    },[setCountries]);

     

//console.log(Countries);
// Countries.map((data,i) =>{
//     console.log(i);
//     console.log(data);

// });

    return(
        <FormControl className={styles.formControl}>
            <NativeSelect defaultValue="" onChange={(e) => handleCountryChange(e.target.value)}>
                <option value="global">Global</option>
                {Countries.map((country,i) => <option key={i} value={country}>{country}</option>)}
            </NativeSelect>
        </FormControl>

    )
}

export default CountryPicker;