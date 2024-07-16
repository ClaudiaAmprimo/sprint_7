import { AsyncPipe } from '@angular/common';
import { Component, EventEmitter, OnInit, Output, HostListener  } from '@angular/core';
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
  public starships: Starwars[] = [];
  private currentPage: number = 1;
  public loading: boolean = false;
  private next: string | null = null;

  @Output() starshipSelected = new EventEmitter<{ starship: Starwars, imageUrl: string }>();

  constructor(private service: StarwarsService, private router: Router){}

  ngOnInit(): void {
    this.loadStarships();
  }

  private loadStarships(): void {
    if (this.loading) return;

    this.loading = true;
    this.service.getStarshipsList(this.currentPage).subscribe(response => {
      response.results.forEach(starship => {
        starship.imageUrl = this.service.getStarshipImageUrl(this.getIdFromUrl(starship.url));
      });

      this.starships = [...this.starships, ...response.results];
      this.next = response.next;
      this.loading = false;
    });
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 100 && this.next && !this.loading) {
      this.currentPage++;
      this.loadStarships();
    }
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
