import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID blR-cm8OKqgR2JoIPa_B81-iZFv33Ba4_akwgvtPrtk",
  },
});
