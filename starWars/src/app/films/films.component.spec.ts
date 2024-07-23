import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { FilmsComponent } from './films.component';
import { StarwarsService } from '../services/starwars.service';
import { Films } from '../interfaces/starwars';
import { provideHttpClientTesting, HttpTestingController } from '@angular/common/http/testing';

describe('FilmsComponent', () => {
  let component: FilmsComponent;
  let fixture: ComponentFixture<FilmsComponent>;
  let service: jasmine.SpyObj<StarwarsService>;
  let httpTestingController: HttpTestingController;

  const mockFilms: Films[] = [
    { title: 'A New Hope', episode_id: 4, url: 'http://swapi.dev/api/films/1/', imageUrl: 'http://starwars-visualguide.com/assets/img/films/1.jpg' },
    { title: 'The Empire Strikes Back', episode_id: 5, url: 'http://swapi.dev/api/films/2/', imageUrl: 'http://starwars-visualguide.com/assets/img/films/2.jpg' }
  ];

  beforeEach(async () => {
    const serviceSpy = jasmine.createSpyObj('StarwarsService', ['getFilmDetails', 'getFilmImageUrl']);

    await TestBed.configureTestingModule({
      imports: [
        FilmsComponent, 
      ],
      providers: [
        provideHttpClientTesting(),
        { provide: StarwarsService, useValue: serviceSpy }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(FilmsComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(StarwarsService) as jasmine.SpyObj<StarwarsService>;
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load film details on init', () => {
    component.filmUrls = ['http://swapi.dev/api/films/1/', 'http://swapi.dev/api/films/2/'];

    service.getFilmDetails.and.callFake((url: string) => {
      const film = mockFilms.find(f => f.url === url);
      return of(film!);
    });
    service.getFilmImageUrl.and.callFake((id: number) => `http://starwars-visualguide.com/assets/img/films/${id}.jpg`);

    component.ngOnInit();

    expect(service.getFilmDetails).toHaveBeenCalledTimes(2);
    expect(component.films.length).toBe(2);
    expect(component.films).toEqual(mockFilms);
  });
});
