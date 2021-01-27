/* Importar modulos del router de angular */
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Importar componentes */
import { HomeComponent } from './home/home.component';
import { ZapatillasComponent } from './zapatillas/zapatillas.component';
import { VideojuegoComponent } from './videojuego/videojuego.component';
import { CursosComponent } from './cursos/cursos.component';
import { CelularComponent } from './celular/celular.component';
import { ErrorpaginaComponent } from './errorpagina/errorpagina.component';

/* Array de rutas */
/* Para obtener valores desde el navegador a traves de parametros se realiza de la siguiente manera */
/* { path: 'cursos/:nombre/:apellidos', component: CursosComponent }, */
/* y si se quiere poner un parametro de manera opcional se pone lo siguiente */
/* { path: 'cursos/:nombre/:apellidos', component: CursosComponent },
{ path: 'cursos/:nombre', component: CursosComponent }, */
const appRutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'zapatillas', component: ZapatillasComponent },
    { path: 'videojuegos', component: VideojuegoComponent },
    { path: 'cursos', component: CursosComponent },
    { path: 'cursos/:nombre', component: CursosComponent },
    { path: 'cursos/:nombre/:apellido', component: CursosComponent },
    { path: 'cursos/:nombre/:apellido/:followers', component: CursosComponent },
    { path: 'celular', component: CelularComponent },
    { path: '**', component: ErrorpaginaComponent }
];

/* Exportar el modulo del routing */
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<RouterModule> = RouterModule.forRoot(appRutes);
