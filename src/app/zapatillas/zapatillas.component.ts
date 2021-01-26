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
    public marcas: String[];

    constructor(){
        /* Se tiene que crear un array a la propiedad marcas, por que abajo se utiliza con el push */
        this.marcas=new Array(),

        this.zapatillas=[           
            new Zapatilla('Nike Airmax', 'Nike','Rojas',40,true),
            new Zapatilla('Reebook Classic', 'Reebook','Blanco',80,false),
            new Zapatilla('Reebook Spantan', 'Reebook','Negro',180,false),
            new Zapatilla('Nike Runner MD', 'Nike','Negras',60,true),
            new Zapatilla('Nike Cerena', 'Puma','Verde',30,true),
            new Zapatilla('Adidas Yezzy', 'Adidas','Gris',180,false)
        ];
    }
    ngOnInit(){
        console.log(this.zapatillas);
        this.getMarcas();
    }

    getMarcas(){
        this.zapatillas.forEach((zapatilla, index) => {
            if(this.marcas.indexOf(zapatilla.marca)<0){
                this.marcas.push(zapatilla.marca);
            }
            
           /*  console.log(index);     */    
        });

        console.log(this.marcas);
    }
}