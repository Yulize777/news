import React, {useEffect, useState} from 'react';
import {fetchFromAPI} from "../../fetchFromApi";
import {useParams} from "react-router-dom";
const News = () => {
    const {hostname} = useParams()
    const [card,setCard] = useState({})
    useEffect(() => {
         fetchFromAPI(`?hostname=${hostname}`)
             .then(data => setCard(data) )
    },[])
    return (
        <div className={'card'}>
            <div className="container">

            </div>
        </div>
    );
};

export default News;