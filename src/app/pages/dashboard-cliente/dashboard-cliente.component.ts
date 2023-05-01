import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-cliente',
  templateUrl: './dashboard-cliente.component.html',
  styleUrls: ['./dashboard-cliente.component.css']
})
export class DashboardClienteComponent implements OnInit {
  dataCliente: any;
  
  constructor(private afAuth: AngularFireAuth,
             private router:Router) {}
 
 
  ngOnInit(): void {
    this.afAuth.currentUser.then((user)=>{
      if(user && user.emailVerified){
        this.dataCliente = user;
      }else{
        this.router.navigate(['/login']);
      }
    })
    
  }

}
