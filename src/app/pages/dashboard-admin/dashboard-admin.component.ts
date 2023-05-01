import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-admin',
  templateUrl: './dashboard-admin.component.html',
  styleUrls: ['./dashboard-admin.component.css']
})
export class DashboardAdminComponent implements OnInit  {

  dataUser: any;
  
  constructor(private afAuth: AngularFireAuth,
             private router:Router) {}
  
  
  ngOnInit(): void {
   this.afAuth.currentUser.then((user)=>{
      if(user && user.emailVerified){
        this.dataUser = user;
      }else{
        this.router.navigate(['/login']);
      }
    })
  }

}
