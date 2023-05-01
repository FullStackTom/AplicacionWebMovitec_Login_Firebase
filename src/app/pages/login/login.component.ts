import { Component, OnInit } from '@angular/core';
import { EmailValidator, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {AngularFireAuth} from '@angular/fire/compat/auth'
import Swal from 'sweetalert2';
import { FirebasecodeErrorService } from 'src/app/services/firebasecode-error.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginUsuario: FormGroup
  loading:boolean=false;


  constructor(
    private fb: FormBuilder, 
    private afAuth: AngularFireAuth,   
    private router: Router,
    private firebaseError: FirebasecodeErrorService,
    private loginService: LoginService
    ){
      this.loginUsuario = this.fb.group({
        email: ['', Validators.required],
        password: ['', Validators.required],
      })
    }


    ngOnInit(): void {
      
     }

    login(){
      const email = this.loginUsuario.value.email;
      const password = this.loginUsuario.value.password;

      this.loading = true;
      this.afAuth.signInWithEmailAndPassword(email, password).then((user)=>{
        
        
        if(user.user?.emailVerified){
          if(email=='tolortegui@gmail.com')  {
            this.router.navigate(['/dashboard-admin']);
          }else{
            this.router.navigate(['/dashboard-cliente']);
          }    
        }
        else{
          this.router.navigate(['/verificar-email']);
        }        
      }).catch((error)=>{
        this.loading=false;
        console.log(error);
        Swal.fire('Error',this.firebaseError.codeError(error.code),'error');
      })

    }
}
