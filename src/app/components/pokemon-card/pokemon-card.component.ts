import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss']
})
export class PokemonCardComponent implements OnInit {

  constructor() { }

  @Input() entryNumber: number;
  @Input() name: string;

  bgGreen = '#70A83B';

  ngOnInit(): void {
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

  getClassFromPokemonType(pokemonType: string) {
    return this.bgGreen;
  }

  goToPokemonDetails() {
    console.log('cliquei');
  }

}
