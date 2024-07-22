import { Component, OnInit } from '@angular/core';
import { Starwars } from '../interfaces/starwars';
import { ActivatedRoute } from '@angular/router';
import { StarwarsService } from '../services/starwars.service';
import { PilotsComponent } from '../pilots/pilots.component';
import { FilmsComponent } from '../films/films.component';

@Component({
  selector: 'app-starship-details',
  standalone: true,
  imports: [PilotsComponent, FilmsComponent],
  templateUrl: './starship-details.component.html',
  styleUrls: ['./starship-details.component.scss']
})
export class StarshipDetailsComponent implements OnInit {
  starship?: Starwars;
  imageUrl?: string;

  private imgPlaceholder: string = 'https://starwars-visualguide.com/assets/img/placeholder.jpg';

  constructor(private route: ActivatedRoute, private service: StarwarsService) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = +params['id'];
      this.service.getStarshipDetails(id).subscribe(starship => {
        this.starship = starship;
        this.imageUrl = this.service.getStarshipImageUrl(id);
      });
    });
  }

  imageError(): void {
    this.imageUrl = this.imgPlaceholder;
  }
}
