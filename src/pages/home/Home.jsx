import React, {useState, useEffect} from 'react';
import {fetchFromAPI} from "../../fetchFromApi";
import {useNavigate} from "react-router-dom";

const Home = () => {

   const [news,setNews] = useState([])
    const [search,setSearch] = useState('')
    useEffect(() => {
         fetchFromAPI(search && `news/news?source_like=${search}`)
             .then(data =>  setNews(data.news.news))
    },[search])

    const sortedData = news.sort((a,b) => {
        return new Date(b.created_at) - new Date(a.created_at)
    })
    const nav = useNavigate()
    return (
        <>
            <header className={'header'}>
                <div className="container">
                    <div className="header__row">
                        <h1>Главная страница</h1>
                        <input value={search} onChange={(e) => setSearch(e.target.value)} className={'header__input'} placeholder={'поиск'} type="text"/>
                    </div>
                </div>
            </header>
            <main className="main">
                <section className="news">
                    <div className="container">
                        <div className="news__row">
                            {
                                sortedData.slice(0,15).map(item => (
                                    <div key={item.link} className={'news__row__card'}>
                                        <img width={'100%'} height={180} src={item.props.image} alt=""/>
                                        <div className="news__row__card__cont">
                                            <h2>{item.source}</h2>
                                            <br/>
                                            <p>{item.title}</p>
                                            <br/>
                                            <p>Опубликовано: {item.created_at}</p>
                                            <br/>
                                            <p>Язык: {item.language && 'Русский'}</p>
                                            <br/>
                                            <p><a href={item.link}>ссылка на сайт-источник</a></p>
                                            <br/>
                                            <p>Рейтинг: {Math.floor(item._score)}</p>
                                            <button onClick={() => nav(`news/${item.hostname}`)} className="news__row__card__btn">
                                                Подробнее
                                            </button>
                                        </div>

                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
};

export default Home;