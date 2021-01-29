/* importamos lo necesario para hacer pipes */
import {Pipe, PipeTransform} from '@angular/core';

/* Creamos el decorador crear el pipe  */
/* En sus metadatos  */
@Pipe({
    name: 'calculadora'    
})
export class CalculadoraPipe implements PipeTransform{
    constructor() {            
        }
    /* dato  | calculadora: otroDato */
    /* param1               param2   */
    transform(value:any, value_two:any){
        let operaciones = `
        Suma: ${value+value_two}
        Resta: ${value-value_two}
        Division: ${value/value_two}
        Multiplicación: ${value*value_two}
        `;
        return operaciones;
    }

    
}
