import { AsyncPipe } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { StarwarsService } from '../services/starwars.service';
import { Observable } from 'rxjs';
import { Starwars, StarwarsResults } from '../interfaces/starwars';
import { Router } from '@angular/router';

@Component({
  selector: 'app-starship-list',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './starship-list.component.html',
  styleUrls: ['./starship-list.component.scss']
})
export class StarshipListComponent implements OnInit {
  public starwarsResults$!: Observable<StarwarsResults>;
  @Output() starshipSelected = new EventEmitter<{ starship: Starwars, imageUrl: string }>();

  constructor(private service: StarwarsService, private router: Router){}

  ngOnInit(): void {
    this.starwarsResults$ = this.service.getStarshipsList();
  }

  onSelectStarship(starship: Starwars): void {
    const id = this.getIdFromUrl(starship.url);
    this.router.navigate(['/starships', id]);
  }

  private getIdFromUrl(url: string): number {
    const segments = url.split('/');
    return Number(segments[segments.length - 2]);
  }
}
