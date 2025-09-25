/*import { Component } from '@angular/core';

@Component({
  selector: 'app-cinepolis',
  standalone: false,
  templateUrl: './cinepolis.component.html',
  styleUrls: ['./cinepolis.component.css']
})
export class CinepolisComponent {
  nombre: string = "";
  personas: number = 0;
  boletos: number = 0;
  tarjeta: string = "no";
  total: number = 0;
  msg: string = "";

  calcular(): void {
    const precio = 12; //la const quiere decir que es una constante que no va a cambir, el 12 no cambiara
    const max = this.personas * 7; //el num de personas por 7 que son las limitantes

    if (this.boletos >max) {
      this.msg =` Máximo ${max} boletos (7 por persona).`;
      this.total=0;
      return;
    }

    let sub=this.boletos*precio; // let: esta es una variable que si podra cambiar

    if (this.boletos >5) {
      sub*= 0.85; // 15% descuento
    } else if (this.boletos >= 3) {
      sub*= 0.90; // 10% descuento
    }

    if (this.tarjeta === "si") {
      sub*= 0.90; // 10% adicional
    }

    this.total = sub;
    this.msg = `Compra de ${this.nombre}. Total: $${sub.toFixed(2)}`;
  }

  salir(): void {
    this.nombre = "";
    this.personas = 0;
    this.boletos = 0;
    this.tarjeta = "no";
    this.total = 0;
    this.msg = "";
  }
}*/

import { Component } from '@angular/core';

@Component({
  selector: 'app-cinepolis',
  standalone: false,
  templateUrl: './cinepolis.component.html',
  styleUrls: ['./cinepolis.component.css']
})
export class CinepolisComponent {

  nombre: string = "";
  personas: string = "";
  boletos: string = "";
  tarjeta: string = "";
  precioB: number = 12;
  total: string = "";
  maximo: string = "";
  mensaje: string = "";


  calcularMax(): void {
    let max = parseInt(this.personas) * 7;
    this.maximo = max.toString();
  }


  calcularDescuentos(): void {
    this.calcularMax();

    let cant = parseInt(this.boletos);
    let max = parseInt(this.maximo);
    let subtotal = cant * this.precioB;

    if (cant <= 0 || cant > max) {
      alert(" Solo se pueden de 1 a 7 boletos por persona");
      return;
    } else if (cant > 5) {
      this.total = (subtotal - (subtotal * 0.15)).toString();
    } else if (cant >= 3 && cant <= 5) {
      this.total = (subtotal - (subtotal * 0.10)).toString();
    } else if (cant > 0 && cant <= 2) {
      this.total = subtotal.toString();
    }
  }

  //
  calcular(): void {
    this.calcularDescuentos();

    if (this.tarjeta == "si") {
      this.total = (parseFloat(this.total) - (parseFloat(this.total) * 0.10)).toString();
    }


    this.mensaje = "Compra de " + this.nombre + ". Total: $" + this.total;
  }
   salir(): void {
    this.nombre = "";
    this.personas = "";
    this.boletos = "";
    this.tarjeta = "";
    this.total = "";
    this.maximo = "";
    this.mensaje = "";
  }
}


