import axios from 'axios';

const apiCovid = axios.create({
    baseURL: 'https://covid19-brazil-api.now.sh',
});

export default apiCovid;

//https://covid19-brazil-api.now.sh/api/report/v1/brazil/uf/sp