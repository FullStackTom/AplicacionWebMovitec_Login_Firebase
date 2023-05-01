import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FirebasecodeErrorService } from 'src/app/services/firebasecode-error.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-recuperar-contrasenia',
  templateUrl: './recuperar-contrasenia.component.html',
  styleUrls: ['./recuperar-contrasenia.component.css']
})
export class RecuperarContraseniaComponent implements OnInit {

  recuperarPassword: FormGroup;
  loading:boolean=false;
  
  constructor(private fb: FormBuilder, 
              private afAuth: AngularFireAuth,   
              private router: Router,
              private firebaseError: FirebasecodeErrorService){
                this.recuperarPassword = this.fb.group({
                  correo:['', Validators.required]
                })
              }
  
  ngOnInit(): void {
    
  }

  recuperar(){
    const email= this.recuperarPassword.value.correo;
    this.loading=true;
    
    this.afAuth.sendPasswordResetEmail(email).then(()=>{
      Swal.fire('Info','Le enviamos un correo para restablecer su password','info');
        this.router.navigate(['/login']);
    }).catch((error)=>{
      this.loading=false;
      Swal.fire('Error',this.firebaseError.codeError(error.code),'error');
    })
  }

}
