import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FullEntryNumberPipe } from 'src/app/pipes/full-entry-number.pipe';
import { PokemonImgPipe } from 'src/app/pipes/pokemon-img.pipe';

import { PokemonCardComponent } from './pokemon-card.component';

describe('PokemonCardComponent', () => {
  let component: PokemonCardComponent;
  let fixture: ComponentFixture<PokemonCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonCardComponent, FullEntryNumberPipe, PokemonImgPipe ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokemonCardComponent);
    component = fixture.componentInstance;
    component.entryNumber = 24;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have poison type background color', () => {
    expect(component.bgGColor).toMatch('#A43E9E');
  })
});
