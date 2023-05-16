import React, { useState } from 'react';

const NewsSearch = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const handleSearch = async () => {
        try {
            const response = await fetch('https://google-news-api1.p.rapidapi.com/search', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'X-RapidAPI-Key': 'YOUR_API_KEY', // Замените на свой ключ API
                },
                params: {
                    query: searchQuery,
                },
            });

            const data = await response.json();
            const news = data.news.news;
            setSearchResults(news);
        } catch (error) {
            console.error('Ошибка при выполнении запроса:', error);
        }
    };

    return (
        <div>
            <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button onClick={handleSearch}>Поиск</button>

            <ul>
                {searchResults.map((newsItem) => (
                    <li key={newsItem.title}>
                        <a href={newsItem.link}>{newsItem.title}</a>
                        <p>{newsItem.description}</p>
                        <p>Источник: {newsItem.source}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default NewsSearch;
