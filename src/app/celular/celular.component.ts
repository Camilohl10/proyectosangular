import {Component,ViewEncapsulation} from '@angular/core';


@Component({
    selector: 'celular',
    template: `
    <div class="card">
    <h1 class="titulo">Hola hola</h1>
    <videojuego></videojuego>
    </div>
    <style>
      .titulo{
        text-align: center;
      }
      .card {        
        
        background-size: cover;
        box-shadow: 0 10px 20px rgba(0,0,0,0.19), 
                    0 6px 6px rgba(0,0,0,0.23);
        height: 300px;
        margin: 20px;
        width: 300px;
      }
    </style>
  `,
  encapsulation: ViewEncapsulation.None,
})
export class CelularComponent {
    constructor(){
        console.log("Se ha cargado el componente: celular.component.ts");
    }
}