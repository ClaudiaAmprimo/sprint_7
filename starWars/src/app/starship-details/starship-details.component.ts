import { Component, Input } from '@angular/core';
import { Starwars } from '../interfaces/starwars';

@Component({
  selector: 'app-starship-details',
  standalone: true,
  imports: [],
  templateUrl: './starship-details.component.html',
  styleUrl: './starship-details.component.scss'
})
export class StarshipDetailsComponent {
  @Input() starship?: Starwars;
  @Input() imageUrl?: string;
}
