import { Component, OnInit } from '@angular/core';
import { PeticionesService } from '../service/peticiones.services';


@Component({
  selector: 'app-externo',
  templateUrl: './externo.component.html',
  styleUrls: ['./externo.component.css'],
  providers: [PeticionesService]
})
export class ExternoComponent implements OnInit {
  public user:any;
  public userId:number;
  
  constructor(
    private _peticionesService:PeticionesService
  ) { 
    this.userId=1;
  }


  ngOnInit(): void {
    /* Para obetener el resultado ponemos el metodo susbcribe, esta a su vez tiene dos metodos callback, resultado y error.*/
    this.cargaUsuario();
  }

  /* hacemos la petición al servicio para ello obtenemos el metodo getUser y le enviamos el parametro this.userId que tiene el valor que le damos en la plantilla con ngModel, para obtener los datos hacemos uso de subscribe y en ella teemos los metodos de callback resultado-satisfactorio y error */
  cargaUsuario(){
    this.user=false;
    this._peticionesService.getUser(this.userId).subscribe(
      result => {
        console.log(result);
        this.user=result.data;
        console.log('Valor de user: ',this.user);
      },
      error=>{
        console.log(<any>error);
      }
    );
  }

}
