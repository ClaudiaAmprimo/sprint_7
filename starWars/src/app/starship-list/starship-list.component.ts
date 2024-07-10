import { AsyncPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { StarwarsService } from '../services/starwars.service';
import { Observable } from 'rxjs';
import { StarwarsResults } from '../interfaces/starwars';

@Component({
  selector: 'app-starship-list',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './starship-list.component.html',
  styleUrl: './starship-list.component.scss'
})
export class StarshipListComponent implements OnInit {
  public starwarsResults$!: Observable<StarwarsResults>;
  constructor(private service: StarwarsService){}

  ngOnInit(): void {
    this.starwarsResults$ = this.service.getStarshipsList();
  }
}
