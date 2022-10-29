import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { PokemonDetailsComponent } from './pokemon-details.component';

describe('PokemonDetailsComponent', () => {
  let component: PokemonDetailsComponent;
  let fixture: ComponentFixture<PokemonDetailsComponent>;

  class ActivatedRouteMock {
    queryParams = new Observable( observer => {
      const urlParams = {
        entryNumber: 1
      }

      observer.next(urlParams);
      observer.complete();
    });
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonDetailsComponent ],
      providers: [{
        provide: ActivatedRoute,
        useClass: ActivatedRouteMock
      }]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokemonDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
