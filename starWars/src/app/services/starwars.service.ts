import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StarwarsResults } from '../interfaces/starwars';

@Injectable({
  providedIn: 'root'
})
export class StarwarsService {

  private baseUrl: string = 'https://swapi.dev/api/starships/?page=1';

  httpClient = inject(HttpClient)

  getStarshipsList(): Observable<StarwarsResults> {
    return  this.httpClient.get<StarwarsResults>(this.baseUrl);
  }
}
