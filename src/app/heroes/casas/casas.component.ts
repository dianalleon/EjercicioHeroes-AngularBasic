import { Component, Input, ViewChild, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

import { HeroeService } from '../services/heroes.service';

@Component({
  selector: 'app-casas',
  templateUrl: './casas.component.html',
})

export class CasasComponent  implements OnInit {

  ngOnInit(): void {
    console.log(this.heroes)
  }

  @Input() heroes: any [] = [];

  heroesBuscados : any[] = [];

  listar(casa: string){
    this.heroesBuscados = this.heroes.filter((item)=>{
        return item.casa === casa;
    })
  }
  
}
