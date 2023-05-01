import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { PlanesComponent } from './pages/planes/planes.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { RecuperarContraseniaComponent } from './pages/recuperar-contrasenia/recuperar-contrasenia.component';
import { DashboardAdminComponent } from './pages/dashboard-admin/dashboard-admin.component';
import { DashboardClienteComponent } from './pages/dashboard-cliente/dashboard-cliente.component';
import { VerificarEmailComponent } from './pages/verificar-email/verificar-email.component';
import { EditarAdminComponent } from './pages/editar-admin/editar-admin.component';
import { RegistroAdminComponent } from './pages/registro-admin/registro-admin.component';


const routes: Routes = [
 {path:'',component:HomeComponent},
 {path:'planes',component:PlanesComponent},
 {path:'about', component:AboutComponent},
 {path:'contact',component:ContactComponent},
 {path:'login',component:LoginComponent},
 {path:'registro',component:RegistroComponent},
 {path:'recuperar-contrasenia', component:RecuperarContraseniaComponent},
 {path: 'dashboard-admin', component:DashboardAdminComponent},
 {path:'dashboard-cliente', component:DashboardClienteComponent},
 {path:'verificar-email', component:VerificarEmailComponent},
 {path:'admin/editar/:id', component:EditarAdminComponent},
 {path:'registro-admin', component:RegistroAdminComponent},
 {path:'**', redirectTo:'', pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
