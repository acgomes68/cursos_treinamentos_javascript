import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Produto } from '../produto';

<p>
  Edição de Produto
</p>
<form (submit)="salvar()">
  <input name="id" type="text" [(ngModel)]="produto.id"><br>  
   
  <input upperCase [class.alerta]="produto.nome.length > 15" required name="nome" type="text" [(ngModel)]="produto.nome">
  <div [style.display]="produto.nome.length > 15 ? 'block' : 'none'">Evite nomes com mais de 15 caracteres.</div>

  <input type="submit" value="Salvar">
</form>
<div [textContent]="debug"></div>

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
    this.produto = new Produto();
    this.produto.id = 1;
    this.produto.nome = "Macarrão";
  }

  salvar() {
    alert(this.produto.nome);
  }

  get debug() {
    return JSON.stringify(this.produto);
  }
}
