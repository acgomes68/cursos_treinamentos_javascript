import { URL_API } from './base';

export function consultarResumo() {
    return fetch(`${URL_API}/resumo`).then(resultado => resultado.json());
}