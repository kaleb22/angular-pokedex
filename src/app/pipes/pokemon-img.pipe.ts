import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pokemonImg'
})
export class PokemonImgPipe implements PipeTransform {

  transform(entryNumber: number, args?: any): string {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${entryNumber}.svg`
  }

}
