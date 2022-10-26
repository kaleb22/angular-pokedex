import { Pipe, PipeTransform } from '@angular/core';
import { PokemonEntry } from 'pokenode-ts';

@Pipe({
  name: 'filterPokemons'
})
export class FilterPokemonsPipe implements PipeTransform {

  transform(pokemonsList: PokemonEntry[], pokemonNameToSearch: string) {
    
    return pokemonsList.filter( pokemon => pokemon.pokemon_species.name.toLocaleLowerCase().includes(pokemonNameToSearch));
  }

}
