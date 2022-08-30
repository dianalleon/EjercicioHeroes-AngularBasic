import { Component, Input } from "@angular/core";
import { HeroeService } from '../services/heroes.service';

@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html'
})

export class HeroeComponent{

  get heroes(){
    return this.heroeService.heroes;
  }

  constructor(private heroeService: HeroeService){
  }

  pintarColor(){}

}
