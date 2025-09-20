import { Component } from '@angular/core';

@Component({
  selector: 'app-operas-bas',
  standalone: false,
  templateUrl: './operas-bas.component.html',
  styleUrl: './operas-bas.component.css'
})
export class OperasBasComponent {

  num1:string="";
  num2:string="";
  res:string="";
  opera:string="";


  sumar():void{
    this.res=(parseInt(this.num1) + parseInt(this.num2)).toString();
  }
  restar():void{
    this.res=(parseInt(this.num1) - parseInt(this.num2)).toString();
  }
  multiplicar():void{
    this.res=(parseInt(this.num1) * parseInt(this.num2)).toString();
  }
  dividir():void{
    this.res=(parseInt(this.num1) / parseInt(this.num2)).toString();
  }
  operaciones():void{
    if (this.opera=="sumar"){
      this.sumar();
    }else if(this.opera=="restar"){
        this.restar();
    }else if(this.opera=="multiplicacion"){
      this.multiplicar();
    }else if(this.opera=="division"){
      this.dividir();
    }
  }

}
