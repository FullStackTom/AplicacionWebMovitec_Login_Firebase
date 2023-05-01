import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {AngularFireAuth} from '@angular/fire/compat/auth'
import { MatSnackBar } from '@angular/material/snack-bar';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { FirebasecodeErrorService } from 'src/app/services/firebasecode-error.service';



@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit{
  
  registrarUsuario: FormGroup;
  loading: boolean = false;

  

  constructor(
    private fb: FormBuilder, 
    private afAuth: AngularFireAuth,
    private snack:MatSnackBar,
    private router: Router,
    private firebaseError: FirebasecodeErrorService

    ) { 
    this.registrarUsuario = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
      
    });
  }


  ngOnInit(): void {
  }

  registrar(){
    const email = this.registrarUsuario.value.email;
    const password = this.registrarUsuario.value.password;  
    
    this.loading = true
    this.afAuth
    .createUserWithEmailAndPassword(email, password)
    .then(()=>{
      this.loading = false;
     /* Swal.fire('Usuario guardado','Usuario registrado con exito en el sistema','success');
      this.router.navigate(['/login']);*/
      this.verificarCorreo();
    })
    .catch((error)=>{
      this.loading = false;
      console.log(error);
      Swal.fire('Error',this.firebaseError.codeError(error.code),'error');
    }); 

  }

  verificarCorreo(){
    this.afAuth.currentUser.then(user=> user?.sendEmailVerification())
    .then(()=>{
      Swal.fire('Le enviamos un correo electronico para su verificación','info');
      this.router.navigate(['/login']);

    });
  }

}