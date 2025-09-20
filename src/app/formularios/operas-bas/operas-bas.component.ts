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
  operacion:string="";


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
    if (this.operacion=="sumar"){
      this.sumar();
    }else if(this.operacion=="resta"){
        this.restar();
    }else if(this.operacion=="multiplicacion"){
      this.multiplicar();
    }else{
      this.dividir();
    }
  }

}
