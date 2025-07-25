import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "3eea4b2ba9284701bba74325fa62dac0",
  },
});
