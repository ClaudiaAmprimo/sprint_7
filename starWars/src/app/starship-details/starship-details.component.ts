import { Component, OnInit } from '@angular/core';
import { Starwars } from '../interfaces/starwars';
import { ActivatedRoute } from '@angular/router';
import { StarwarsService } from '../services/starwars.service';

@Component({
  selector: 'app-starship-details',
  standalone: true,
  templateUrl: './starship-details.component.html',
  styleUrls: ['./starship-details.component.scss']
})
export class StarshipDetailsComponent implements OnInit {
  starship?: Starwars;
  imageUrl?: string;

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
}
