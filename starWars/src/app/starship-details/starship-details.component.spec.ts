import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StarshipDetailsComponent } from '../starship-details/starship-details.component';
import { StarwarsService } from '../services/starwars.service';
import { of } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';

describe('StarshipDetailsComponent', () => {
  let component: StarshipDetailsComponent;
  let fixture: ComponentFixture<StarshipDetailsComponent>;
  let starwarsService: jasmine.SpyObj<StarwarsService>;

  beforeEach(async () => {
    const spy = jasmine.createSpyObj('StarwarsService', ['getStarshipDetails', 'getStarshipImageUrl']);

    await TestBed.configureTestingModule({
      imports: [StarshipDetailsComponent],
      providers: [
        { provide: StarwarsService, useValue: spy },
        {
          provide: ActivatedRoute,
          useValue: {
            params: of({ id: 1 })
          }
        },
        provideHttpClient()
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(StarshipDetailsComponent);
    component = fixture.componentInstance;
    starwarsService = TestBed.inject(StarwarsService) as jasmine.SpyObj<StarwarsService>;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load starship details on init', () => {
    const mockStarship = {
      id: 1,
      name: 'Starship1',
      model: 'Model1',
      url: 'https://swapi.dev/api/starships/1/',
      cost_in_credits: '1000000',
      max_atmosphering_speed: '1000',
      manufacturer: 'Manufacturer1',
      length: '100',
      crew: '10',
      pilots: [],
      films: []
    };

    starwarsService.getStarshipDetails.and.returnValue(of(mockStarship));
    starwarsService.getStarshipImageUrl.and.returnValue('https://starwars-visualguide.com/assets/img/starships/1.jpg');

    fixture.detectChanges();

    expect(component.starship).toEqual(mockStarship);
    expect(component.imageUrl).toBe('https://starwars-visualguide.com/assets/img/starships/1.jpg');
  });
});
