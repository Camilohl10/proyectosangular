import {Component,ViewEncapsulation, OnInit,DoCheck, OnDestroy} from '@angular/core';

@Component({
    selector: 'videojuego',
    templateUrl:'./videojuego.component.html',
    styleUrls: ['./videojuego.component.css']
})

export class VideojuegoComponent implements OnInit,DoCheck,OnDestroy{
    public titulo:string;
    public listado:string;
    constructor(){
        this.titulo="Componente de videojuegos";
        this.listado="Listado de los juegos más populares."
        console.log("Se ha cargado el componente: videojuego.component.ts");
    }
    /* Se ejecuta al cargar el componente */
    ngOnInit(){
        console.log("OnInit ejecutado! en videojuego.component.ts");
    }
    /* Se ejecuta al hacerle un cambio página/componente*/
    ngDoCheck(): void {
        console.log('DoCheck ejecutado.');
    }

    cambiarTitulo(){
        this.titulo="Nuevo titulo de componente";
    }
    /* Se ejecuta cuando se destruye un componente */
    ngOnDestroy(){
        console.log("OnDestroy Ejecutado");
    }

}