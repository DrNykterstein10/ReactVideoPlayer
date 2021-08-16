import axios from 'axios';

const KEY = 'AIzaSyBRCssVFl7HCGqmGI5jh8zlf1bGC73UPfs';

export default axios.create({
    baseURL : 'https://www.googleapis.com/youtube/v3',
    params : {
        part : 'snippet',
        type : 'video',
        maxResults : 5,
        key : KEY
    }
});