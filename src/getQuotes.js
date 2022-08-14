import axios from "axios";

const url = 'https://api.quotable.io/random';

export default async () => {
    const { data } = await axios.get(url);
    return data;
}
