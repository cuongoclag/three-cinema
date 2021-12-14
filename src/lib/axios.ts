import axios from "axios";

// Syntax
// getAPI('/users','GET')
export default async function getAPI(url: string, method: string, body?: any) {
  const urlOrigin = "https://movienew.cybersoft.edu.vn/api";

  const headers = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    TokenCybersoft:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAwOEUiLCJIZXRIYW5TdHJpbmciOiIzMC8wMy8yMDIyIiwiSGV0SGFuVGltZSI6IjE2NDg1OTg0MDAwMDAiLCJuYmYiOjE2MTY1MTg4MDAsImV4cCI6MTY0ODc0NjAwMH0.N_fGufzvG8LNffZDL7TGqoRt10gi2jpPbqfgAzpvx9c",
  };
  let objMeta: any = {
    method,
    url: `${urlOrigin}${url}`,
    headers,
    data: body,
  };
  return await axios(objMeta);
}
