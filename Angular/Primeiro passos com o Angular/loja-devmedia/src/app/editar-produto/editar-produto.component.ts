import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Produto } from '../produto';

@Component({
  selector: 'app-editar-produto',
  templateUrl: './editar-produto.component.html',
  styleUrls: ['./editar-produto.component.css']
})
export class EditarProdutoComponent implements OnInit {
  produto: Produto;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.snapshot.params['id'];
    this.produto = new Produto();
    this.produto.id = 1;
    this.produto.nome = 'Macarrão';
  }

  change() {
    alert('change');
  }

  salvar() {
    alert(this.produto.nome);
  }

  get debug() {
    return JSON.stringify(this.produto);
  }
}
