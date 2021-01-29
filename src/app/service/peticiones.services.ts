import { Injectable } from "@angular/core";

/* Nos permitirá hacer peticiones ajax a un servicio o url y tambien modificar las headers o cabeceras de las peticiones. */
import { HttpClient, HttpHeaders } from "@angular/common/http";

/* Importamos el observable ya que a traves de ella vamos a recoger la información que  nos devuele el api rest cuando hagamos una petición */
/* exjs es  una libreria que hemos instalado con el proyecto. */
import { Observable } from "rxjs/Observable";

@Injectable()

export class PeticionesService {
    public url: string;

    

    constructor(public _http: HttpClient) {
        /* Asigamos el url general del api */
        this.url = "https://reqres.in";
    }
    /* Obtenermos un usuario del api */
    /* Le diremos que devuelva un dato de tipo Observable */
    //le recibimos el id del usuario y hacemos la petición tipo get
    getUser(userId):Observable<any>{
        return this._http.get(this.url+'/api/users/'+userId);
    }

    /* Hacemos una petición post*/
    /* recibimos el usuario en formato string y con el JSON.stringify(user) lo convertimos a json y lo asignamo en la variable let param_json */
    /* creamos una variable headers y le asignamos el valor de la cabecera, para le asignamos un nuevo HttpHeaders().set('nombre-cabecera','valor para establecer o anular la cabecera dado') */
    addUser(user):Observable<any>{
        let param_json = JSON.stringify(user);
        let headers = new HttpHeaders().set('Content-Type','application/json');

        return this._http.post(this.url+'/api/users',param_json,{headers:headers});
    }
    

}