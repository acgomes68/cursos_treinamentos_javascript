import { Injectable } from '@angular/core';
import { Cerveja } from './cerveja';

@Injectable()
export class CervejaService {
  private cervejas: Cerveja[] = new Array();

  constructor() { }

  obterCervejas(): Cerveja[] {
    let cerveja = new Cerveja();
    cerveja.id = 1;
    cerveja.nome = "DevMedia Black Beer";
    cerveja.ibu = 80;
    cerveja.cor = "Preta";
    this.cervejas.push(cerveja);

    cerveja = new Cerveja();
    cerveja.id = 2;
    cerveja.nome = "DevMedia Pilsen";
    cerveja.ibu = 10;
    cerveja.cor = "Clara";
    this.cervejas.push(cerveja);
    
    cerveja = new Cerveja();
    cerveja.id = 3;
    cerveja.nome = "DevMedia IPA";
    cerveja.ibu = 100;
    cerveja.cor = "Clara";
    this.cervejas.push(cerveja);
    
    return this.cervejas;
  }

  obterCerveja(id: number): Cerveja {
    let cerveja = new Cerveja();
    cerveja.id = 1;
    cerveja.nome = "DevMedia Black Beer";
    cerveja.ibu = 80;
    cerveja.cor = "Preta";
    
    return cerveja;
  }

}
