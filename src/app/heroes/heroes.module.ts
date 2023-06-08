import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroComponent } from './hero/hero.component';
import { ListComponent } from './list/list.component';
  /* Este es un módulo que hemos creado para agrupar los componenentes que hemos creado.
    Este módulo lo importaremos en el root para que la aplicación tenga constancia de estos componentes,
    Podríamos importar los componentes diréctamente al módulo principal 'app.module.ts' pero no es buenas prácticas
    y de esta manera está todo mucho más ordenado.
  */
@NgModule({

  // Este módulo exporta estos dos componentes.
  exports: [
    HeroComponent,
    ListComponent,
  ],
  // Se declaran los componentes que hemos creado.
  declarations: [
    HeroComponent,
    ListComponent,
  ],
  // En los imports siempre van los módulos que vamos a usar, CommonModule casi siempre lo vamos a usar.
  imports: [
    CommonModule
  ]
})
export class HeroesModule { }
