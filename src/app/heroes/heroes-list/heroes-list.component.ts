import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list', //nombre del selector con el que mandare a llamarlo
  standalone: false,
  templateUrl: './heroes-list.component.html',

})
export class HeroesListComponent { //nombre de la clase este se invoca en el add mosules

  heroes: any[] = [
    {
      "imagen": "https://dragonball-api.com/characters/goku_normal.webp",
      nombre: "Goku",
      descripcion: "Kakaroto",
      race: "Saiyan",
      ki: 9000
    },

    {
      "imagen": "https://dragonball-api.com/characters/picolo_normal.webp",
      nombre: "Piccolo",
      descripcion: "Peter parker",
      race: "Saiyan",
      ki: 20000
    },
    {
      "imagen": "https://dragonball-api.com/characters/vegeta_normal.webp",
      nombre: "Vegeta",
      descripcion: "parker",
      race: "Saiyan",
      ki: 570000
    },
    {
      "imagen": "https://dragonball-api.com/characters/bulma.webp",
      nombre: "Bulma",
      descripcion: "parker",
      race: "Human",
      ki: 0
    }
  ]
}

