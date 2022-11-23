import axios from "axios";

const getAll = url => axios.get(url);

const getItemById = (url, id) => axios.get(`${url}?userId=${id}&_limit=2`);

export { getAll, getItemById };
