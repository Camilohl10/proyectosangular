import { Injectable } from "@angular/core";

/* Nos permitirá hacer peticiones ajax a un servicio o url y tambien modificar las headers o cabeceras de las peticiones. */
import { HttpClient, HttpHeaders } from "@angular/common/http";

/* Importamos el observable ya que a traves de ella vamos a recoger la información que  nos devuele el api rest cuando hagamos una petición */
/* exjs es una libreria que hemos instalado con el proyecto. */
import { Observable } from "rxjs";

@Injectable()

export class PeticionesService {
    public url: string;

    

    constructor(public _http: HttpClient) {
        /* Asigamos el url general del api */
        this.url = "https://reqres.in";
    }
    /* Obtenermos un usuario del api */
    /* Le diremos que devolvea un dato de tipo Observable */
    getUser(userId):Observable<any>{
        return this._http.get(this.url+'/api/users/'+userId);
    }

}