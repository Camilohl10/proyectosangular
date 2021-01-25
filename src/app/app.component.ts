import { Component,DoCheck } from '@angular/core';
/* Importando una variable, tambien puede ser una clase, variable o función o lo que sea. */
import { Configuracion } from './models/configuracion';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements DoCheck{
  public title = 'Curso de Angular';
  public descripcion = "Angular"
  public mostrar_videojuegos: boolean = true;
  public config;

  constructor(){
    this.config=Configuracion;
    this.title=Configuracion.titulo;
    this.descripcion=Configuracion.descripcion;    
  }

  ocultarVideojuegos(valor_booleano){
    this.mostrar_videojuegos=valor_booleano;
  }
  ngDoCheck(){
    console.log("Valor de DoCheck: mostrar_videojuegos: "+ this.mostrar_videojuegos);
  }

}
