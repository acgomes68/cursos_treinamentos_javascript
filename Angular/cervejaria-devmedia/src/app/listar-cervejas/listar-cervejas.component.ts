import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cerveja } from '../cerveja';
import { CervejaService } from '../cerveja.service';

@Component({
  selector: 'app-listar-cervejas',
  templateUrl: './listar-cervejas.component.html',
  styleUrls: ['./listar-cervejas.component.css'],
  providers: [CervejaService]
})
export class ListarCervejasComponent implements OnInit {
  cervejas: Cerveja[];

  constructor(
    private router: Router, 
    private service: CervejaService) { }

  ngOnInit() {
    this.cervejas = this.service.obterCervejas();
  }

  editarCerveja(cerveja: Cerveja) {
    this.router.navigate(['/cervejas', cerveja.id]);
  }

  novo() {
    this.router.navigate(['/cervejas/novo']);
  }

}
