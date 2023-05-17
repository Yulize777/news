import axios from 'axios';



export const fetchFromAPI = async () => {
    const { data } = await axios.get(`https://newsapi.org/v2/everything?q=bitcoin&apiKey=da2b7a4f99674b518e657e3b00063b43`);
    console.log(data)
    return data;
};
