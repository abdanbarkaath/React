import axios from "axios";

// configure base URL
const apiHost = process.env.VUE_APP_API_HOST;
let baseURL =
  "http://localhost:3000/users";
// const headers = {
//   "Content-Type": "application/json",
//   Authorization:
//     "Bearer " +
//     "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJvcmdfaWQiOiI2IiwidHlwZSI6ImppcmEiLCJqaXJhX2luc3RhbmNlX25hbWUiOiJhZGlkYXMiLCJpc3MiOiJDOTd4TXJtQXpncGxndVpTTndTVFA3bnV0RXBLTUFpMCIsImlhdCI6MTUxNjIzOTAyMn0.5MgfH-vLiUx8xVTNVTBi1LKbNFw-0zO44D_m_Vp1Uzg"
// };
// Dev Mode
if (!window.location.href.includes("localhost")) {
  baseURL = `${apiHost}`;
}

export default axios.create({ baseURL });
