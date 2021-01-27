import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
/* Importar FormsModule para uso de two data binding*/
/* Una vez importado hay que cargarlo dentro de imports */
import { FormsModule } from '@angular/forms'

/* Importamos modulos de rutas */
import { routing, appRoutingProviders } from './app.routing';

import { AppComponent } from './app.component';

/* Importar componente creado */
import { VideojuegoComponent} from './videojuego/videojuego.component';
import { CelularComponent} from './celular/celular.component';
import { ZapatillasComponent} from './zapatillas/zapatillas.component';
import { CursosComponent } from './cursos/cursos.component';
import { HomeComponent } from './home/home.component';
import { ErrorpaginaComponent } from './errorpagina/errorpagina.component';



@NgModule({
  declarations: [
    AppComponent,
    VideojuegoComponent,
    CelularComponent,
    ZapatillasComponent,
    CursosComponent,
    HomeComponent,
    ErrorpaginaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
