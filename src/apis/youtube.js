import axios from "axios";

const KEY = "AIzaSyDc5lOQzE6fs4yDt1Z5k-I2hM18qfjkgFM";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});
