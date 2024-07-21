import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StarshipListComponent } from './starship-list/starship-list.component';
import { StarshipDetailsComponent } from './starship-details/starship-details.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './guards/auth.guard';


export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'starships', component: StarshipListComponent, canActivate: [AuthGuard] },
  { path: 'starships/:id', component: StarshipDetailsComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent },
];
