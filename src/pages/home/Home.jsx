import React, {useState, useEffect} from 'react';
import {fetchFromAPI} from "../../fetchFromApi";
import {useNavigate} from "react-router-dom";

const Home = () => {

   const [news,setNews] = useState([])
    const [search,setSearch] = useState('')
    const fetchNews = () => {
        fetchFromAPI()
            .then(data => {
                const sortedData = data.articles.sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt))
                setNews(sortedData)
            })
    }
    const handleRefresh = () => {
        fetchNews()
    }


    useEffect(() => {
        fetchNews()

        const interval = setInterval(() => {
            fetchNews()
        }, 60000)

        return () => {
            clearInterval(interval)
        }
    }, [search])

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
                        <button className={'news__btn'} onClick={handleRefresh}>Refresh</button>
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
                    </div>
                </section>
            </main>
        </>
    );
};

export default Home;