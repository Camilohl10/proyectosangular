export class Zapatilla {

    /* Forma tipica de hacer declaración y crear constructor */
    /* public nombre:string;
    public marca:string;
    public color:string;
    public precio:number;
    public stock:boolean;

    constructor(nombre,marca,color,precio,stock){
        this.nombre=nombre;
        this.marca=marca;
        this.color=color;
        this.precio=precio;
        this.stock=stock;
    } */

    /* Typescript realiza esta forma de costructor en donde en los parametros se hace la declaración y asignación sin realizar tanto codigo */
    constructor(
        public nombre:string,
        public marca: string,
        public color: string,
        public precio: number,
        public stock: boolean) 
        { }
}