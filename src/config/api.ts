import axios from "axios";

const api = axios.create({
  baseURL: "https://post-tdd-back.vercel.app",
});
  
export { api };

//"http://localhost:3000"
//"https://post-tdd-back.vercel.app"
