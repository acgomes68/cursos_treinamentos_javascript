import { URL_API } from "./base";
 
export function listarConsultas(callback){
    fetch(`${URL_API}/consultas`)
    .then(resultado => resultado.json().then(callback));
}