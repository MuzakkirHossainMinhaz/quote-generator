import axios from 'axios';

const url = 'https://andruxnet-random-famous-quotes.p.rapidapi.com/';

const config = {
    headers: {
        'X-RapidAPI-Key': 'ce3cad6b46msheee1fbc47bef3e1p16f42ejsn459a80dda3cd',
    },
    transformResponse: response => response,
}

export default async () => {
    const { data } = await axios.get(url, config);
    return data;
}
