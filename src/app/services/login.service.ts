import { AngularFireAuth } from "@angular/fire/compat/auth";
import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators';

@Injectable()
export class LoginService{
    constructor(private authService: AngularFireAuth){}

//metodo nos regresa el usuario que se ha autenticado:
getAuth(){
    return this.authService.authState.pipe(
        map(auth => auth)
    )
}

}