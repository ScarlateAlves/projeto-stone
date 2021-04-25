import axios from "axios";

export const api = axios.create({
  baseURL: "https://economia.awesomeapi.com.br/json/daily",
});

export const busca = async (setDados) => {
  const response = await api.get("/USD-BRL");
  setDados(response.data);
};
