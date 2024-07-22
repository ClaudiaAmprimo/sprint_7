import { Component, Input, OnInit } from '@angular/core';
import { StarwarsService } from '../services/starwars.service';
import { Pilots } from '../interfaces/starwars';

@Component({
  selector: 'app-pilots',
  standalone: true,
  imports: [],
  templateUrl: './pilots.component.html',
  styleUrl: './pilots.component.scss'
})
export class PilotsComponent implements OnInit{
  @Input() pilotUrls: string[] = [];
  pilots: Pilots[] = [];

  constructor(private service: StarwarsService) {}

  ngOnInit(): void {
    this.pilotUrls.forEach(url => {
      this.service.getPilotDetails(url).subscribe(pilot => {
        const id = this.getIdFromUrl(pilot.url);
        pilot.imageUrl = this.service.getPilotsImageUrl(id);
        this.pilots.push(pilot);
      });
    });
  }

  private getIdFromUrl(url: string): number {
    const segments = url.split('/');
    return Number(segments[segments.length - 2]);
  }
}
