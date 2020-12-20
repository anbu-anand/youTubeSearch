import axios from "axios";
const KEY = "AIzaSyCIrFCGtHw_UrAxOmf8wbvbPlqZWUjluzs";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 10,
    key: KEY
  }
});
