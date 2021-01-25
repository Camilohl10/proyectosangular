import { Component,DoCheck } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements DoCheck{
  title = 'Curso de Angular';
  public mostrar_videojuegos: boolean = true;

  ocultarVideojuegos(valor_booleano){
    this.mostrar_videojuegos=valor_booleano;
  }
  ngDoCheck(){
    console.log("Valor de DoCheck: mostrar_videojuegos: "+ this.mostrar_videojuegos);
  }

}
