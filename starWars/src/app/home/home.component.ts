import { Component } from '@angular/core';
import { StarshipListComponent } from '../starship-list/starship-list.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [StarshipListComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}