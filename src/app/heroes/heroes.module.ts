import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { HeroeComponent } from "./Todos-heroes/heroe.component";
import { InfoComponent } from './info/info.component';
import { CasasComponent } from './casas/casas.component';

import { HeroeService } from "./services/heroes.service";


@NgModule({
    declarations: [
        HeroeComponent,
        InfoComponent,
        CasasComponent,
    ],
      exports: [//lo que vamos a hacer visibles
        HeroeComponent,
        InfoComponent,
        CasasComponent
    ],
    imports:[ //van modulos
        CommonModule
    ],
    providers: [
        HeroeService
    ]
})

export class HeroesModule{}