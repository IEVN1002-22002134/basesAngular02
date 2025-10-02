import { Component } from '@angular/core';
import { Resistencias2Component } from './resistencias2.component';

@Component({
  selector: 'app-resistencias',
  standalone: false,
  templateUrl: './resistencias.component.html',
  styleUrls: ['./resistencias.component.css']
})
export class ResistenciasComponent {

  componente2 = new Resistencias2Component();

  color1 = this.componente2.bandas[0];
  color2 = this.componente2.bandas[0];
  color3 = this.componente2.multiplicadores[0];
  tolerancia = this.componente2.tolerancias[0];

  valor = 0;
  valorMax = 0;
  valorMin = 0;

  calcular() {
    const resultado = this.componente2.calcular(this.color1, this.color2, this.color3, this.tolerancia);
    this.valor = resultado.valor;
    this.valorMax = resultado.valorMax;
    this.valorMin = resultado.valorMin;
  }
}

