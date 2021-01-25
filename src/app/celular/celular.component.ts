import {Component,ViewEncapsulation} from '@angular/core';


@Component({
    selector: 'celular',
    template: `
    <div class="card">    
    <h1 class="titulo">Componente de celular</h1>
    <!-- Usando componente videojuego dentro del componente celular -->
    <videojuego></videojuego>
    </div>

    <style>
      .titulo{
        color: blue;
        text-align: center;
        border: 1px solid green;
        margin:0;

      }
      .card {        
        border: 1px solid orange;
        background-size: cover;
        box-shadow: 0 10px 20px rgba(0,0,0,0.19), 
                    0 6px 6px rgba(0,0,0,0.23);
        /* height: 300px; */
        /* margin: 20px; */
        margin-top: 20px;
        /* width: 300px; */
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