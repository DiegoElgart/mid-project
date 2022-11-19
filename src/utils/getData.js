import axios from "axios";

const getAll = url => axios.get(url);

const getItemById = (url, id) => axios.get(`${url}?userId=${id}&_limit=5`);

export { getAll, getItemById };
