import { Component, OnInit, DoCheck } from '@angular/core'
import { Scroll } from '@angular/router';
import { off } from 'process';
/* Se importa la clase Zapatilla de modelo/zapatilla*/
import { Zapatilla } from '../models/zapatilla'

@Component({
    selector: 'zapatilla',
    templateUrl: './zapatillas.component.html'
})

export class ZapatillasComponent implements OnInit, DoCheck {
    public titulo: string = "Componente de Zapatillas";
    /* Se crea una variable de clase de tipo Array con tipo de datos Clase Zapatilla */
    public zapatillas: Array<Zapatilla>;
    public marcas: String[];
    public color: string;
    public mi_marca: string;
    public marca_no_repetida: String[];

    constructor() {
        /* Se tiene que crear un array a la propiedad marcas, por que abajo se utiliza con el push */
        this.color = "yellow",
            this.marcas = new Array(),
            this.marca_no_repetida = new Array(),
            this.zapatillas = [
                new Zapatilla('Nike Airmax', 'Nike', 'Rojas', 40, true),
                new Zapatilla('Reebook Classic', 'Reebook', 'Blanco', 80, false),
                new Zapatilla('Reebook Spantan', 'Reebook', 'Negro', 180, false),
                new Zapatilla('Nike Runner MD', 'Nike', 'Negras', 60, true),
                new Zapatilla('Nike Cerena', 'Puma', 'Verde', 30, true),
                new Zapatilla('Adidas Yezzy', 'Adidas', 'Gris', 180, false)
            ];
    }
    ngOnInit() {
        console.log(this.zapatillas);
        this.getMarcas();

    }
    ngDoCheck() {
        console.log("CAMILO");
        /* this.getMarcas(); */
        this.marcasinRepetir();
        console.log("valor de color: ", this.color.length, this.color.trim().length);
    }

    /* Sacamos las marcas si ya existen  */
    getMarcas() {
        this.zapatillas.forEach((zapatilla, index) => {
            if (this.marcas.indexOf(zapatilla.marca) < 0) {
                this.marcas.push(zapatilla.marca);
            }
            console.log(zapatilla.marca);

        });
        console.log(this.marcas);
    }

    marcasinRepetir() {
        this.marcas.forEach((marca) => {
            console.log(marca);
            if (this.marca_no_repetida.indexOf(marca) < 0) {
                this.marca_no_repetida.push(marca);
            }
        });
    }

    getMarca() {
        if (this.mi_marca != undefined || this.mi_marca == '') {
            alert(this.mi_marca);
        } else {
            alert("Rellena o introduce algo en la casilla.")
        }

    }

    addMarca() {
        if (this.marcas.indexOf(this.mi_marca) < 0) {
            this.marcas.push(this.mi_marca);
        }
        else {
            alert("Marca ya existe");
        }
        /* this.marcas.push(this.mi_marca); */
    }

    borrarMarca(indice) {
        /* Elimina el elemento y los convierte en undefined */
        //delete this.marcas[indice];

        /* La función splice elimina elementos del array a partir del indice y la cantidad a eliminar a partir del indice  */
        this.marcas.splice(indice, 1);
    }
    borrarMarcasSinRepetir(indice) {
        /* Elimina el elemento y los convierte en undefined */
        //delete this.marca_no_repetida[indice];

        /* La función splice elimina elementos del array a partir del indice y la cantidad a eliminar a partir del indice  */
        this.marca_no_repetida.splice(indice, 1);
    }
    onBlur() {
        console.log("Se trabaja en el evento onBlur, has salido del input");
    }
    mostrarPalabra() {
        alert(this.mi_marca);
    }
    toTheTop() {
        scroll({
            top: 0.0,
            behavior: "smooth"
        });
        /* document.body.scrollTop=0.0; */
        /* document.documentElement.scrollTop = 0.0;
        document.documentElement.scrollTop.toString; */

    }
}