import axios from "axios";

const url = 'http://api.quotable.io/random';

export default async () => {
    const { data } = await axios.get(url);
    return data;
}
