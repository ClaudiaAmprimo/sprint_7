import { AsyncPipe } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { StarwarsService } from '../services/starwars.service';
import { Observable } from 'rxjs';
import { Starwars, StarwarsResults } from '../interfaces/starwars';

@Component({
  selector: 'app-starship-list',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './starship-list.component.html',
  styleUrl: './starship-list.component.scss'
})
export class StarshipListComponent implements OnInit {
  public starwarsResults$!: Observable<StarwarsResults>;

  @Output() starshipSelected = new EventEmitter<{ starship: Starwars, imageUrl: string }>();

  constructor(private service: StarwarsService){}

  ngOnInit(): void {
    this.starwarsResults$ = this.service.getStarshipsList();
  }

  onSelectStarship(starship: Starwars): void {
    const id = this.getIdFromUrl(starship.url);
    const imageUrl = this.service.getStarshipImageUrl(id);
    this.starshipSelected.emit({ starship, imageUrl });
  }

  private getIdFromUrl(url: string): number {
    const segments = url.split('/');
    return Number(segments[segments.length - 2]);
  }
}
