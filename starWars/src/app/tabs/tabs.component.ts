import { Component } from '@angular/core';
import { StarshipListComponent } from '../starship-list/starship-list.component';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-tabs',
  standalone: true,
  imports: [StarshipListComponent, HomeComponent],
  templateUrl: './tabs.component.html',
  styleUrl: './tabs.component.scss'
})
export class TabsComponent {

}
