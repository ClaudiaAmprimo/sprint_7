import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StarshipListComponent } from './starship-list/starship-list.component';
import { StarshipDetailsComponent } from './starship-details/starship-details.component';

export const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'starships', component: StarshipListComponent},
  { path: 'starships/:id', component: StarshipDetailsComponent}
];
