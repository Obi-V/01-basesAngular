import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: []
})
export class HeroComponent {

  //Propiedades del componente Hero
  public name: string = 'ironman';
  public age: number = 45;

  /*Método get que devuelve el nombre en mayúsculas.
  Este no es el caso pero el método get se puede usar para devolver el valor de propiedades privadas fuera del componente,
  al devolver el valor mantiene su privacidad porque no se puede cambiar desde fuera.
  */
  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  /*Devuelve un string con el nombre y la edad del heroe, al usar backticks ``
  podemos usar las variables o propiedades dentro de un string con el símbolo del dolar '$' y llaves '{ }'
  */
  getHeroDescription(): string {
    return `${this.name} - ${this.age}`;
  }

  // Cambia el nombre del componente
  changeHero(): void {
    this.name = 'Spiderman'
  }

  // Cambia la edad del componente
  changeAge(): void {
    this.age = 25;
  }

  // Setea los valores del componente a los que tenía al principio
  resetForm(): void {
    this.name = 'ironman';
    this.age = 45;

  }

}
