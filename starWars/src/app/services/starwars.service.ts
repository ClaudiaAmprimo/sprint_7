import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Starwars, StarwarsResults } from '../interfaces/starwars';

@Injectable({
  providedIn: 'root'
})
export class StarwarsService {

  private baseUrl: string = 'https://swapi.dev/api/starships/';
  private imageBaseUrl: string = 'https://starwars-visualguide.com/assets/img/starships/';

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
}
