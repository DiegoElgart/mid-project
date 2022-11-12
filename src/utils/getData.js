import axios from "axios";

const getAll = url => axios.get(url);

const getItemById = (url, id) => axios.get(`${url}?userId=${id}`);

export { getAll, getItemById };
