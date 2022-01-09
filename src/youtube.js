import axios from 'axios';

const KEY = "AIzaSyAAyzp4o88aBrXAfAzgWAXm1jOrokMItdM";

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3/",
    params:{
        part: 'snippet',
        maxResults: 1,
        key: KEY
    }
})