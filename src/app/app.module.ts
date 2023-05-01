import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';



//Modulos
import { AppRoutingModule } from './app-routing.module';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatCardModule} from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {AngularFireModule} from '@angular/fire/compat'
import { ToastrModule } from 'ngx-toastr';



//Componentes
import {RegistroComponent} from './pages/registro/registro.component';
import { RecuperarContraseniaComponent } from './pages/recuperar-contrasenia/recuperar-contrasenia.component';
import { VerificarEmailComponent } from './pages/verificar-email/verificar-email.component';
import { SpinnerComponent } from './sharepage/spinner/spinner.component';
import { AppComponent } from './app.component';
import { NavbarComponent } from './sharepage/navbar/navbar.component';
import { FooterComponent } from './sharepage/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { PlanesComponent } from './pages/planes/planes.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { LoginComponent } from './pages/login/login.component';
import { environment } from 'src/environments/environment';
import { DashboardAdminComponent } from './pages/dashboard-admin/dashboard-admin.component';
import { DashboardClienteComponent } from './pages/dashboard-cliente/dashboard-cliente.component';
import { LoginService } from './services/login.service';
import { AdminComponent } from './pages/admin/admin.component';
import { EditarAdminComponent } from './pages/editar-admin/editar-admin.component';
import { RegistroAdminComponent } from './pages/registro-admin/registro-admin.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    PlanesComponent,
    AboutComponent,
    ContactComponent,
    LoginComponent,
    RegistroComponent,
    RecuperarContraseniaComponent,
    VerificarEmailComponent,
    SpinnerComponent,
    DashboardAdminComponent,
    DashboardClienteComponent,
    AdminComponent,
    EditarAdminComponent,
    RegistroAdminComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    HttpClientModule,
    FormsModule,
    MatSnackBarModule,
    MatCardModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    ToastrModule.forRoot()
    
    
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
