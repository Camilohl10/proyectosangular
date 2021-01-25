import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

/* Importar componente creado */
import { VideojuegoComponent} from './videojuego/videojuego.component';
import { CelularComponent} from './celular/celular.component';

@NgModule({
  declarations: [
    AppComponent,
    VideojuegoComponent,
    CelularComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
