import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { petComponent } from './components/pet/pet.component';
import { SingupComponent } from './components/singup/singup.component';
import { LoginComponent } from './components/login/login.component';
import { achatComponent } from './components/achat/achat.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FactureComponent } from './components/facture/facture.component';
import { StoreComponent } from './components/store/store.component';


const routes: Routes = [
    //http://localhost;4200/home
    { path: '', component: HomeComponent },
    //http://localhost;4200/Species
    { path: 'Species', component:StoreComponent },
    //http://localhost;4200/pet
    { path: 'pet', component: petComponent },
    //http://localhost;4200/pet
    { path: 'pet/:category', component: petComponent },
    //http://localhost;4200/signup
    { path: 'signup', component: SingupComponent },
    //http://localhost;4200/login
    { path: 'login', component: LoginComponent },
    //http://localhost;4200/achat
    { path: 'achat/:id', component: achatComponent },
    //http://localhost;4200/dashboard
    { path: 'dashboard/:id', component: DashboardComponent },
    //http://localhost;4200/facture
    { path: 'facture/:id', component: FactureComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
