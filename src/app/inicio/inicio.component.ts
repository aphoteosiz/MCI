import { Component } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {
isFlipped: boolean = false;
isFlipped1: boolean = false;
isFlipped2: boolean = false;
isFlipped3: boolean = false;


toggleFlip(){
  this.isFlipped = !this.isFlipped;
}
toggleFlip1(){
  this.isFlipped1 = !this.isFlipped1;
}
toggleFlip2(){
  this.isFlipped2 = !this.isFlipped2;
}
toggleFlip3(){
  this.isFlipped3 = !this.isFlipped3;
}
}
