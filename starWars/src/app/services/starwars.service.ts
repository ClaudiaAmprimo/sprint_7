import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Films, Pilots, Starwars, StarwarsResults } from '../interfaces/starwars';

@Injectable({
  providedIn: 'root'
})
export class StarwarsService {

  private baseUrl: string = 'https://swapi.dev/api/starships/';
  private imageBaseUrl: string = 'https://starwars-visualguide.com/assets/img/starships/';
  private pilotImageBaseUrl: string = 'https://starwars-visualguide.com/assets/img/characters/';
  private filmImageBaseUrl: string = 'https://starwars-visualguide.com/assets/img/films/'

  httpClient = inject(HttpClient)

  getStarshipsList(page: number): Observable<StarwarsResults> {
    return this.httpClient.get<StarwarsResults>(`${this.baseUrl}?page=${page}`);
  }

  getStarshipDetails(id: number): Observable<Starwars> {
    return this.httpClient.get<Starwars>(`${this.baseUrl}${id}/`);
  }

  getStarshipImageUrl(id: number): string {
    return `${this.imageBaseUrl}${id}.jpg`;
  }

  getPilotDetails(url: string): Observable<Pilots> {
    return this.httpClient.get<Pilots>(url);
  }

  getPilotsImageUrl(id: number): string{
    return `${this.pilotImageBaseUrl}${id}.jpg`;
  }

  getFilmDetails(url: string): Observable<Films> {
    return this.httpClient.get<Films>(url);
  }

  getFilmImageUrl(id: number): string{
    return `${this.filmImageBaseUrl}${id}.jpg`;
  }
}
