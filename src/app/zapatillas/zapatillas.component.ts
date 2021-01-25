import { from } from "rxjs";
import { Component, OnInit } from '@angular/core'
/* Se importa la clase Zapatilla de modelo/zapatilla*/
import { Zapatilla } from '../models/zapatilla'

@Component({
    selector: 'zapatilla',
    templateUrl: './zapatillas.component.html'
})

export class ZapatillasComponent implements OnInit{
    public titulo: string = "Componente de Zapatillas";
    /* Se crea una variable de clase de tipo Array con tipo de datos Clase Zapatilla */
    public zapatillas:Array<Zapatilla>;

    constructor(){
        this.zapatillas=[
            new Zapatilla('Reebook Classic', 'Reebook','Blanco',80,true)
        ];
    }
    ngOnInit(){
        console.log(this.zapatillas);
    }
}