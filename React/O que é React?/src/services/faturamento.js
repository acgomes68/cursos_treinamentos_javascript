import { URL_API } from "./base";
 
export function consultarFaturamento(callback){
    fetch(`${URL_API}/faturamento`)
    .then(resultado => resultado.json().then(callback));
}