import { Component, Input } from '@angular/core';
import { Films } from '../interfaces/starwars';
import { StarwarsService } from '../services/starwars.service';

@Component({
  selector: 'app-films',
  standalone: true,
  imports: [],
  templateUrl: './films.component.html',
  styleUrl: './films.component.scss'
})
export class FilmsComponent {
  @Input() filmUrls: string[] = [];
  films: Films[] = [];

  constructor(private service: StarwarsService) {}

  ngOnInit(): void {
    this.filmUrls.forEach(url => {
      this.service.getFilmDetails(url).subscribe(film => {
        const id = this.getIdFromUrl(film.url);
        film.imageUrl = this.service.getFilmImageUrl(id);
        this.films.push(film);
      });
    });
  }

  private getIdFromUrl(url: string): number {
    const segments = url.split('/');
    return Number(segments[segments.length - 2]);
  }
}
