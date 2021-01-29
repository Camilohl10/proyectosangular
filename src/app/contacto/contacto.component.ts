import { Component, OnInit } from '@angular/core';
import { ContactoUsuario } from '../models/contacto.usuario';


@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {
  /* Inicica carga de modelo Usuario*/  
  public usuario: ContactoUsuario;
  /* Termina carga de modelo Usuario */

  constructor() {
    /* Inicializamos el usuario con unos valores para eso creamos un nuevo contacto*/
    this.usuario= new ContactoUsuario('Camilo','','','');
    /* this.usuario= new ContactoUsuario('Camilo','Hernández','camilo@gmail.com','Hola soy Camilo Hernández Lara y estoy estudiando Angular'); */
   }

  ngOnInit(): void {
    
  }

  onSubmit(form){
    console.log("Evento submit lanzado");
    console.log(this.usuario);
    /* El método reset lo que hace es poner a null el objeto o los objetos vinculados al formulario*/
    /* Hay que checar la parte de reseteo de un formulario */
    form.reset();
  }
}
