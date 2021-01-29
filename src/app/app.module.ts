import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
/* Importar FormsModule para uso de two data binding*/
/* Una vez importado hay que cargarlo dentro de imports */
import { FormsModule } from '@angular/forms'

/* Importamos modulos para trabajar con rutas */
import { routing, appRoutingProviders } from './app.routing';

/* Importamos el modulo httpClienModule para trabajar con las peticiones Ajax  despues lo tenemos que cargar en servicios o inports*/
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
/* Cargamos nuestra pipe personalizado y lo ponemos e declarations*/
import { CalculadoraPipe } from './pipes/calculadora.pipes';

/* Importar componente creado */
import { VideojuegoComponent} from './videojuego/videojuego.component';
import { CelularComponent} from './celular/celular.component';
import { ZapatillasComponent} from './zapatillas/zapatillas.component';
import { CursosComponent } from './cursos/cursos.component';
import { HomeComponent } from './home/home.component';
import { ErrorpaginaComponent } from './errorpagina/errorpagina.component';
import { ExternoComponent } from './externo/externo.component';
import { ContactoComponent } from './contacto/contacto.component';




@NgModule({
  declarations: [
    AppComponent,
    VideojuegoComponent,
    CelularComponent,
    ZapatillasComponent,
    CursosComponent,
    HomeComponent,
    ErrorpaginaComponent,
    ExternoComponent,
    CalculadoraPipe,
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    HttpClientModule
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
