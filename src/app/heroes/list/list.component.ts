import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: []
})
export class ListComponent {

  // Definimos la propiedad 'heroNames' como un array de strings, y lo inicializamos con valores
  public heroNames: string[] = ['Spiderman', 'Ironman', 'Hulk', 'She Hulk', 'Thor'];

  /* Definimos la propiedad 'deletedHero', cuando se inicialize el componente este valor no existirá
    así que en la propiedad ponemos '?' para indicar que es optional, puede existir o no.
    También podríamos definirlo así para que no de errores:
        public deletedHero: string = '';
    Pero lo correcto sería usar el signo de interrogación para indicar que podría ser nulo.
  */
  public deletedHero?: string;

  //Usamos el método de los arrays pop() para sacar el último elemento del array y lo igualamos a la propiedad 'deletedHero'
  removeLastHero(): void {
    this.deletedHero = this.heroNames.pop();
  }

}
