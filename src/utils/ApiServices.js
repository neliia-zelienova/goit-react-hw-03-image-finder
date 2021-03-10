import axios from 'axios';
const API_KEY = '19701765-66040315454630f125fe17080';

axios.defaults.baseURL = `https://pixabay.com/api/?key=${API_KEY}&`;

const getImages = (query, page) => {
    const requestQuery = query.replace(/ /g, "+");
    return axios.get(
      `&q=${requestQuery}&image_type=photo&page=${page}&per_page=12`
    ).then(response => response.data.hits);
}

export default getImages;