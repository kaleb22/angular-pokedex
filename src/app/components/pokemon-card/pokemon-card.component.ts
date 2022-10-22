import { Component, Input, OnInit } from '@angular/core';
import { PokemonTypeService } from 'src/app/services/pokemon-type.service';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss']
})
export class PokemonCardComponent implements OnInit {

  constructor(private pokemonTypeService: PokemonTypeService) { }

  @Input() entryNumber: number;
  @Input() name: string;

  bgGColor = '';

  ngOnInit(): void {
    this.bgGColor = this.pokemonTypeService.getBackgroundColorByIndex(this.entryNumber);
  }

  getPokemonImage(): string {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.entryNumber}.svg`
  }

  getEntryNumberFormated() {
    if(this.entryNumber >= 0 && this.entryNumber <= 9) {
      return `#00${this.entryNumber}`;
    }

    if(this.entryNumber >= 10 || this.entryNumber <= 99) {
      return `#0${this.entryNumber}`;
    }

    return `#${this.entryNumber}`;
  }

  goToPokemonDetails() {
    console.log('cliquei');
  }

}
