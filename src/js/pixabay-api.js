import axios from "axios";

const API_KEY = "50837590-b5294368a5e0df0c87d227cce"
const BASE_URL = "https://pixabay.com/api/";

export function getImagesByQuery(query) {
  const params = {
    key: API_KEY,
    q: query,
    image_type: "photo",
    orientation: "horizontal",
    safesearch: true,
  };
 return axios(BASE_URL, {params})
 .then(response => response.data)
 .catch(error => {
   throw new Error("Помилка запиту до API");
 });
}