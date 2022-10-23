import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PokemonTypeService } from 'src/app/services/pokemon-type.service';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss']
})
export class PokemonCardComponent implements OnInit {

  constructor(
    private pokemonTypeService: PokemonTypeService,
    private router: Router

  ) { }

  @Input() entryNumber: number;
  @Input() name: string;

  bgGColor = '';

  ngOnInit(): void {
    this.bgGColor = this.pokemonTypeService.getBackgroundColorByIndex(this.entryNumber);
  }

  getPokemonImage(): string {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.entryNumber}.svg`
  }

  goToPokemonDetails() {
    this.router.navigate(['/pokemonDetails'], { queryParams: { entryNumber: this.entryNumber }});
  }

}
