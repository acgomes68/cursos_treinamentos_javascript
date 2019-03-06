import { Produto } from './produto';
import { Injectable } from '@angular/core';

@Injectable()

export class ProdutoService {

    getProdutos() {
        let produtos: Produto[] = [];

        let produto = new Produto();
        produto.id = 1;
        produto.nome = 'Macarrão';
        produtos.push(produto);
    
        produto = new Produto();
        produto.id = 2;
        produto.nome = 'Feijão';
        produtos.push(produto);

        return produtos;
    }
}