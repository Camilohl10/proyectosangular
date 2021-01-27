import { Component, OnInit } from '@angular/core';

/* importamos modulos para recibir parametros por la url */
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {
  public titulo:string ;
  public descripcion:string;
  public nombre:string;
  public apellido:string;
  public followers:number;

  /* Inyectamos los servicios Router, ActivatedRoute en nuestro contructor */
  constructor(
    private _route: ActivatedRoute,
    private _router: Router
  ) {
    this.titulo="Componente cursos"
    this.descripcion="Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, culpa beatae? Maxime tempore ea eum dolore cupiditate, omnis pariatur id suscipit nisi sint. Repellendus sunt modi doloribus quam cum? Ratione, eos illum?";
   }

  /* Para obtener los parametros de la url se tiene que utilizar la variable que le asignamos los servicio Router  */
  /* el servicio router es un servicio que provee navegación entre vistas y caacidades de manipulación de url */
  ngOnInit(): void {
    this._route.params.subscribe((params: Params)=>{
      console.log(params);

      this.nombre = params.nombre;
      /* Tambien se puede acceder de forma asociatica pero se omite*/
      /* this.nombre = params['nombre']; */
      this.apellido = params.apellido;
      /* el más al inicio del  params.followers es para convertir un string a number*/
      this.followers = +params.followers;
      if (this.nombre == 'ninguno') {
        this._router.navigate(['/home']);
      }
    });        
  }
  
  redirigir(){
    this._router.navigate(['/zapatillas']);
  }

}
