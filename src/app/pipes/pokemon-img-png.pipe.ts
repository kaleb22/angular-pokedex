import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pokemonImgPng'
})
export class PokemonImgPngPipe implements PipeTransform {

  transform(entryNumber: number, args?: any): string {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${entryNumber}.png`
  }

}
