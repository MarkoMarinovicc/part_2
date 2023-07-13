import axios from "axios";

export const client = axios.create({
  baseURL: "https://studies.cs.helsinki.fi/restcountries",
});

