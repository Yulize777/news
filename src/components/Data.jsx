import React from 'react';
import {useNavigate} from "react-router-dom";

const Data = ({news,search}) => {

    const nav = useNavigate()
    return (
        <div className="news__row">
            {
                search ?  news.filter(item => item.author && item.author.toLowerCase().startsWith(search))
                        .map((item, index) => (
                            <div key={index} className={'news__row__card'}>
                                <img width={'100%'} height={180} src={item.urlToImage} alt=""/>
                                <div className="news__row__card__cont">
                                    <h2>{item.author}</h2>
                                    <br/>
                                    <p>{item.content}</p>
                                    <br/>
                                    <p>Published: {item.publishedAt}</p>
                                    <br/>
                                    <p><a href={item.url}>ссылка на сайт-источник</a></p>
                                    <button onClick={() => nav(`news/${index}`)} className="news__row__card__btn">
                                        More
                                    </button>
                                </div>
                            </div>
                        )) :
                    news.slice(0,15).map((item,index) => (
                        <div key={index} className={'news__row__card'}>
                            <img width={'100%'} height={180} src={item.urlToImage} alt=""/>
                            <div className="news__row__card__cont">
                                <h2>{item.author}</h2>
                                <br/>
                                <p>{item.content}</p>
                                <br/>
                                <p>Published: {item.publishedAt}</p>
                                <br/>
                                <p><a href={item.url}>ссылка на сайт-источник</a></p>
                                <br/>
                                <button onClick={() => nav(`news/${index}`)} className="news__row__card__btn">
                                    More
                                </button>
                            </div>
                        </div>
                    ))
            }
        </div>
    );
};

export default Data;