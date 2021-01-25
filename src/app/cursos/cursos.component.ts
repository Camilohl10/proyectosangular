import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {
  public titulo:string ;
  public descripcion:string;
  constructor() {
    this.titulo="Componente cursos"
    this.descripcion="Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, culpa beatae? Maxime tempore ea eum dolore cupiditate, omnis pariatur id suscipit nisi sint. Repellendus sunt modi doloribus quam cum? Ratione, eos illum?";
   }

  ngOnInit(): void {
  }

}
