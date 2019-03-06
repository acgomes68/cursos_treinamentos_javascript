import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CervejaService } from '../cerveja.service';
import { Cerveja } from '../cerveja';

@Component({
  selector: 'app-editar-cerveja',
  templateUrl: './editar-cerveja.component.html',
  styleUrls: ['./editar-cerveja.component.css'],
  providers: [CervejaService]
})
export class EditarCervejaComponent implements OnInit {

  @Input()
  cerveja: Cerveja = new Cerveja();

  novo: boolean = false;

  constructor(
    private service: CervejaService, 
    private route: ActivatedRoute, 
    private router: Router) { }

  ngOnInit() {
    let id = +this.route.snapshot.params['id'];
    if(id) {
      this.cerveja = this.service.obterCerveja(id);
    } else {
      this.novo = true;
    }
  }

  salvar(cerveja: Cerveja) {
    this.router.navigate(['/cervejas']);
  }

}
