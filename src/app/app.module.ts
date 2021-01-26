import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
/* Importar FormsModule para uso de two data binding*/
/* Una vez importado hay que cargarlo dentro de imports */
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';

/* Importar componente creado */
import { VideojuegoComponent} from './videojuego/videojuego.component';
import { CelularComponent} from './celular/celular.component';
import { ZapatillasComponent} from './zapatillas/zapatillas.component';
import { CursosComponent } from './cursos/cursos.component';



@NgModule({
  declarations: [
    AppComponent,
    VideojuegoComponent,
    CelularComponent,
    ZapatillasComponent,
    CursosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
