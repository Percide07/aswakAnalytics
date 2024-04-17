import { localMagasins } from "./data/magasin.js";
const codeExecuted = localStorage.getItem("codeExecuted");

if (!codeExecuted) {
  localStorage.setItem("localMagasins",JSON.stringify(localMagasins));
  localStorage.setItem("codeExecuted", true);
}

