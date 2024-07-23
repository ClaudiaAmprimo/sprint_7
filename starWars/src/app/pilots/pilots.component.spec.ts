import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { PilotsComponent } from './pilots.component';
import { StarwarsService } from '../services/starwars.service';
import { Pilots } from '../interfaces/starwars';
import { provideHttpClientTesting, HttpTestingController } from '@angular/common/http/testing';

describe('PilotsComponent', () => {
  let component: PilotsComponent;
  let fixture: ComponentFixture<PilotsComponent>;
  let service: jasmine.SpyObj<StarwarsService>;
  let httpTestingController: HttpTestingController;

  const mockPilots: Pilots[] = [
    { name: 'Luke Skywalker', url: 'http://swapi.dev/api/people/1/', imageUrl: 'http://starwars-visualguide.com/assets/img/characters/1.jpg' },
    { name: 'C-3PO', url: 'http://swapi.dev/api/people/2/', imageUrl: 'http://starwars-visualguide.com/assets/img/characters/2.jpg' }
  ];

  beforeEach(async () => {
    const serviceSpy = jasmine.createSpyObj('StarwarsService', ['getPilotDetails', 'getPilotsImageUrl']);

    await TestBed.configureTestingModule({
      imports: [
        PilotsComponent, 
      ],
      providers: [
        provideHttpClientTesting(),
        { provide: StarwarsService, useValue: serviceSpy }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(PilotsComponent);
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

  it('should load pilot details on init', () => {
    component.pilotUrls = ['http://swapi.dev/api/people/1/', 'http://swapi.dev/api/people/2/'];

    service.getPilotDetails.and.callFake((url: string) => {
      const pilot = mockPilots.find(p => p.url === url);
      return of(pilot!);
    });
    service.getPilotsImageUrl.and.callFake((id: number) => `http://starwars-visualguide.com/assets/img/characters/${id}.jpg`);

    component.ngOnInit();

    expect(service.getPilotDetails).toHaveBeenCalledTimes(2);
    expect(component.pilots.length).toBe(2);
    expect(component.pilots).toEqual(mockPilots);
  });
});
