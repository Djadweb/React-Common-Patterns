import { React, useEffect, useState } from 'react';
import axios from 'axios';

const HOC = (Component, entity) => {
    const HOComponent = () => {    
        const [data, setData]= useState([]);    
        useEffect(() => {
            axios
            .get(`https://jsonplaceholder.typicode.com/${entity}`)
            .then((res) => {
                setData(res.data)
            })
        });        

        return (
            <div className='HOC'>
                <h2>{entity}</h2>         
                <Component data={data}></Component>
            </div>
        );
    }
    return HOComponent;
}   

export default HOC;
