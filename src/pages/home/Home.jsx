import React, {useState, useEffect} from 'react';
import {fetchFromAPI} from "../../fetchFromApi";
import Data from '../../components/Data'
const Home = () => {

   const [news,setNews] = useState([])
    const [search,setSearch] = useState('')
    const fetchNews = () => {
        fetchFromAPI()
            .then(data => {
                const sortedData = data.articles.sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt))
                setNews(sortedData)
            })
            .catch(err => {
                console.log(err)
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
                           <Data search={search} news={news}/>
                    </div>
                </section>
            </main>
        </>
    );
};

export default Home;