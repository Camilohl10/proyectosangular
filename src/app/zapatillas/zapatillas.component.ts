import { from } from "rxjs";
import { Component } from '@angular/core'

@Component({
    selector: 'zapatilla',
    templateUrl: './zapatillas.component.html'
})

export class ZapatillasComponent{
    public titulo: string = "Componente de Zapatillas";
}