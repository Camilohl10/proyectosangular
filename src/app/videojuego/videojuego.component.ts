import {Component} from '@angular/core';

@Component({
    selector: 'videojuego',
    template: `
    <h2>Componente de videojuego</h2>
    <ul>
        <li>GTA</li>
        <li>Prince of persia</li>
        <li>Tekken</li>
        <li>Mario</li>
        <li>Zeta</li>
    </ul>
    `,
})
export class VideojuegoComponent {
    constructor(){
        console.log("Se ha cargado el componente: videojuego.component.ts");
    }
}