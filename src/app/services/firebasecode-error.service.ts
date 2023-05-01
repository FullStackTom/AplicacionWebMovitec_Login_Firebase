import { Injectable } from '@angular/core';
import { FirebaseCodeErrorEnum } from '../utils/firebase-code-error';

@Injectable({
  providedIn: 'root'
})
export class FirebasecodeErrorService {

  constructor() { }

  codeError(code: string){
    switch(code){
      //El correo ya existe
      case FirebaseCodeErrorEnum.EmailAlreadyInUse:
        return 'El usuario ya existe';

      //Contraseña Debil  
      case FirebaseCodeErrorEnum.WeakPassword:
        return 'La contraseña es muy debil';

      //Contraseña Incorrecta  
      case FirebaseCodeErrorEnum.WrongPassword:
        return 'La contraseña es incorrecta';

      //Correo invalido  
      case FirebaseCodeErrorEnum.InvalidEmail:
        return 'El correo es invalido';

      //El usuario no existe  
      case FirebaseCodeErrorEnum.UserNotFound:
        return 'El usuario no existe';

      default:
        return 'Error desconocido';
    }
  }
}


