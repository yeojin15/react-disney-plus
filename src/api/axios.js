import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: '0d68503e930c252412f51b57b3f1eca4',
    language: 'ko-KR',
  },
});

export default instance;
