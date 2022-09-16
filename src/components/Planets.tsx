import React from 'react';
import { useQuery } from 'react-query';
import { FETCH_PLANET_URL } from '../constants/ApiConstants';
import { pageConstants } from '../constants/AppContants';


const Planets = () => {

    const {data,status} = useQuery(pageConstants.PLANETS, async ()=>{
        const res= await fetch(FETCH_PLANET_URL);
        return res.json();
    })

    console.log(data);
    console.log(status);
    return ( 
        <>
        Planets {status}
        </>
    );
}
 
export default Planets;