/* Importar modulos del router de angular */
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Importar componentes */
import { HomeComponent } from './home/home.component';
import { ZapatillasComponent } from './zapatillas/zapatillas.component';
import { VideojuegoComponent } from './videojuego/videojuego.component';
import { CursosComponent } from './cursos/cursos.component';
import { CelularComponent } from './celular/celular.component';

/* Array de rutas */

const appRutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'zapatilas', component: ZapatillasComponent },
    { path: 'videojuegos', component: VideojuegoComponent },
    { path: 'cursos', component: CursosComponent },
    { path: 'celular', component: CelularComponent },
    { path: '**', component: HomeComponent }
];

/* Exportar el modulo del routing */
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<RouterModule> = RouterModule.forRoot(appRutes);
