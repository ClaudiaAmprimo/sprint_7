import { Component } from '@angular/core';
import { StarshipListComponent } from '../starship-list/starship-list.component';
import { HomeComponent } from '../home/home.component';
import { Starwars } from '../interfaces/starwars';
import { StarshipDetailsComponent } from '../starship-details/starship-details.component';

@Component({
  selector: 'app-tabs',
  standalone: true,
  imports: [StarshipListComponent, HomeComponent, StarshipDetailsComponent],
  templateUrl: './tabs.component.html',
  styleUrl: './tabs.component.scss'
})
export class TabsComponent {
  selectedStarship?: Starwars;
  selectedImageUrl?: string;

  onStarshipSelected(event: { starship: Starwars, imageUrl: string }): void {
    this.selectedStarship = event.starship;
    this.selectedImageUrl = event.imageUrl;
  }
}
