import { URL_API } from './base';

export function listarConsultas() {
    return fetch(`${URL_API}/consultas`).then(resultado => resultado.json());
}