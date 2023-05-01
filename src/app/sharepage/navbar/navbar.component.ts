import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isLoggedIn: boolean = false;
 


 constructor(private afAuth: AngularFireAuth,
             private router:Router,
             private loginService:LoginService
             ) {}
 
email:string='tolortegui@gmail.com';
             
 
  ngOnInit() {
    this.loginService.getAuth().subscribe( auth => {
      if(auth){
        this.isLoggedIn = true;        
      }
      else{
        this.isLoggedIn = false;
      }
    })
  }

  logOut(){
    this.afAuth.signOut().then(() =>this.router.navigate(['/login']));
  }

}
