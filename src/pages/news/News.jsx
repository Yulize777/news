import React, {useEffect, useState} from 'react';
import {fetchFromAPI} from "../../fetchFromApi";
import {useNavigate, useParams} from "react-router-dom";
const News = () => {
    const {id} = useParams()
    const [card,setCard] = useState([])
    const nav = useNavigate()
    useEffect(() => {
         fetchFromAPI()
             .then(data => {
                 const sortedData = data.articles.sort((a,b) => {
                     return new Date(b.publishedAt) - new Date(a.publishedAt)
                 })
                 setCard(sortedData)
             } )
    },[])
    if (card === null) {
        return <div>Loading...</div>
    }

    if (card.length === 0) {
        return <div>Данных нет</div>
    }

    return (
        <div className={'card'}>
            <div className="container">
                <button onClick={() => nav(-1)} className={'card__btn'}>go home</button>
               <div className="card__row">
                   <div className="card__row__side">
                       <img width={'65%'} height={'65%'} src={card[id].urlToImage} alt="image"/>
                   </div>
                   <div className="card__row__side">
                       <h2>{card[id].author}</h2>
                       <br/>
                       <p>{card[id].content}</p>
                       <br/>
                       <p>Опубликовано: {card[id].publishedAt}</p>
                       <br/>
                       <p><a href={card[id].url}>ссылка на сайт-источник</a></p>
                       <br/>
                       <p>{card[id].description}</p>
                       <br/>
                       <p>{card[id].title}</p>
                   </div>
               </div>
            </div>
        </div>
    );
};

export default News;