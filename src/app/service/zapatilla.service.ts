import { Injectable } from '@angular/core';
import { Zapatilla } from '../models/zapatilla';

@Injectable()
export class ZapatillaService {
    public zapatillas: Array<Zapatilla>;
    constructor() {
        this.zapatillas = [
            new Zapatilla('Nike Airmax', 'Nike', 'Rojas', 40, true),
            new Zapatilla('Reebook Classic', 'Reebook', 'Blanco', 80, false),
            new Zapatilla('Reebook Spantan', 'Reebook', 'Negro', 180, false),
            new Zapatilla('Nike Runner MD', 'Nike', 'Negras', 60, true),
            new Zapatilla('Nike Cerena', 'Puma', 'Verde', 30, true),
            new Zapatilla('Adidas Yezzy', 'Adidas', 'Gris', 180, false)
        ];
    }

    getZapatillas():Array<Zapatilla>{
        return this.zapatillas;
    }

    getTexto():string{
        return "Hola mundo desde un servicio";
    }
}