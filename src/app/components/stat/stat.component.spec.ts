import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PokemonStat } from 'pokenode-ts';
import { FormatStatPipe } from 'src/app/pipes/format-stat.pipe';

import { StatComponent } from './stat.component';

describe('StatComponent', () => {
  let component: StatComponent;
  let fixture: ComponentFixture<StatComponent>;

  const pokemonStatMock: PokemonStat = {
    stat: {
      name: 'hp',
      url: ''
    },
    base_stat: 90,
    effort: 30
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatComponent, FormatStatPipe ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatComponent);
    component = fixture.componentInstance;
    component.stats = pokemonStatMock;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
