import axios from 'axios';


export const BASE_URL = 'https://google-news-api1.p.rapidapi.com/search';
const options = {
    method: 'GET',
    params: {
        language: 'RU'
    },
    headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
        'X-RapidAPI-Host': 'google-news-api1.p.rapidapi.com'
    }
};

export const fetchFromAPI = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    console.log(data)
    return data;
};
