import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokemonTypeService {

  constructor() { }

  POKEMON_TYPE_FIRE = { index: 0, color: '#F57D31', type: 'fire' };
  POKEMON_TYPE_FIGHT = { index: 1, color: '#C12239', type: 'fight' };
  POKEMON_TYPE_DRAGON = { index: 2, color: '#7037FF', type: 'dragon' };
  POKEMON_TYPE_GRASS = { index: 3, color: '#74CB48', type: 'grass' };
  POKEMON_TYPE_BUG = { index: 4, color: '#A7B723', type: 'bug' };
  POKEMON_TYPE_WATER = { index: 5, color: '#6493EB', type: 'water' };
  POKEMON_TYPE_ICE = { index: 6, color: '#9AD6DF', type: 'ice' };
  POKEMON_TYPE_ELETRIC = { index: 7, color: '#F9CF30', type: 'eletric' };
  POKEMON_TYPE_ROCK = { index: 8, color: '#B69E31', type: 'rock' };
  POKEMON_TYPE_POISON = { index: 9, color: '#A43E9E', type: 'poison' };
  POKEMON_TYPE_PSYCHIC = { index: 10, color: '#FB5584', type: 'psychic' };
  POKEMON_TYPE_FAIRY = { index: 11, color: '#E69EAC', type: 'fairy' };
  POKEMON_TYPE_GHOST = { index: 12, color: '#70559B', type: 'ghost' };
  POKEMON_TYPE_GROUND = { index: 13, color: '#DEC16B', type: 'ground' };
  POKEMON_TYPE_NORMAL = { index: 14, color: '#AAA67F', type: 'normal' };

  listPokemonTypesByIndex = [
    [4, 5, 6, 37, 38, 58, 59, 77, 78, 126, 136, 146],
    [56, 57, 62, 66, 67, 68, 106, 107],
    [147, 148, 149],
    [1, 2, 3, 43, 44, 45, 69, 70, 71, 102, 103, 114],
    [10, 11, 12, 13, 14, 15, 46, 47, 48, 49, 123, 127],
    [7, 8, 9, 54, 55, 60, 61, 62, 72, 73, 79, 80, 86, 87, 90, 91, 98, 99, 116, 117, 118, 119, 120, 121, 129, 130, 131, 134],
    [124, 144],
    [25, 26, 81, 82, 100, 101, 125, 135, 145],
    [74, 75, 76, 95, 138, 139, 140, 141, 142],
    [23, 24, 29, 30, 31, 32, 33, 34, 41, 42, 88, 89, 109, 110],
    [63, 64, 65, 96, 97, 122, 150, 151],
    [35, 36],
    [92, 93, 94],
    [27, 28, 50, 51, 104, 105, 111, 112],
    [16, 17, 18, 19, 20, 21, 22, 39, 40, 52, 53, 83, 84, 85, 108, 113, 115, 128, 132, 133, 137, 143]
  ];

  getBackgroundColorByIndex(pokemonIndex: number): string {

    if( this.listPokemonTypesByIndex[this.POKEMON_TYPE_FIRE.index].find( index => index === pokemonIndex) ) {
      return this.POKEMON_TYPE_FIRE.color;
    }

    if( this.listPokemonTypesByIndex[this.POKEMON_TYPE_FIGHT.index].find( index => index === pokemonIndex) ) {
      return this.POKEMON_TYPE_FIGHT.color;
    }

    if( this.listPokemonTypesByIndex[this.POKEMON_TYPE_DRAGON.index].find( index => index === pokemonIndex) ) {
      return this.POKEMON_TYPE_DRAGON.color;
    }

    if( this.listPokemonTypesByIndex[this.POKEMON_TYPE_GRASS.index].find( index => index === pokemonIndex) ) {
      return this.POKEMON_TYPE_GRASS.color;
    }

    if( this.listPokemonTypesByIndex[this.POKEMON_TYPE_BUG.index].find( index => index === pokemonIndex) ) {
      return this.POKEMON_TYPE_BUG.color;
    }

    if( this.listPokemonTypesByIndex[this.POKEMON_TYPE_WATER.index].find( index => index === pokemonIndex) ) {
      return this.POKEMON_TYPE_WATER.color;
    }

    if( this.listPokemonTypesByIndex[this.POKEMON_TYPE_ICE.index].find( index => index === pokemonIndex) ) {
      return this.POKEMON_TYPE_ICE.color;
    }

    if( this.listPokemonTypesByIndex[this.POKEMON_TYPE_ELETRIC.index].find( index => index === pokemonIndex) ) {
      return this.POKEMON_TYPE_ELETRIC.color;
    }

    if( this.listPokemonTypesByIndex[this.POKEMON_TYPE_ROCK.index].find( index => index === pokemonIndex) ) {
      return this.POKEMON_TYPE_ROCK.color;
    }

    if( this.listPokemonTypesByIndex[this.POKEMON_TYPE_POISON.index].find( index => index === pokemonIndex) ) {
      return this.POKEMON_TYPE_POISON.color;
    }

    if( this.listPokemonTypesByIndex[this.POKEMON_TYPE_PSYCHIC.index].find( index => index === pokemonIndex) ) {
      return this.POKEMON_TYPE_PSYCHIC.color;
    }

    if( this.listPokemonTypesByIndex[this.POKEMON_TYPE_FAIRY.index].find( index => index === pokemonIndex) ) {
      return this.POKEMON_TYPE_FAIRY.color;
    }

    if( this.listPokemonTypesByIndex[this.POKEMON_TYPE_GHOST.index].find( index => index === pokemonIndex) ) {
      return this.POKEMON_TYPE_GHOST.color;
    }
    
    if( this.listPokemonTypesByIndex[this.POKEMON_TYPE_GROUND.index].find( index => index === pokemonIndex) ) {
      return this.POKEMON_TYPE_GROUND.color;
    }

     return this.POKEMON_TYPE_NORMAL.color;
  }

  getBackgroundColorByType(type: string): string {

    switch (type) {
      case this.POKEMON_TYPE_FIRE.type:
        return this.POKEMON_TYPE_FIRE.color;
      case this.POKEMON_TYPE_FIGHT.type:
        return this.POKEMON_TYPE_FIGHT.color;
      case this.POKEMON_TYPE_DRAGON.type:
        return this.POKEMON_TYPE_DRAGON.color;
      case this.POKEMON_TYPE_GRASS.type:
        return this.POKEMON_TYPE_GRASS.color;
      case this.POKEMON_TYPE_BUG.type:
        return this.POKEMON_TYPE_BUG.color;
      case this.POKEMON_TYPE_WATER.type:
        return this.POKEMON_TYPE_WATER.color;
      case this.POKEMON_TYPE_ICE.type:
        return this.POKEMON_TYPE_ICE.color;
      case this.POKEMON_TYPE_ELETRIC.type:
        return this.POKEMON_TYPE_ELETRIC.color;
      case this.POKEMON_TYPE_ROCK.type:
        return this.POKEMON_TYPE_ROCK.color;
      case this.POKEMON_TYPE_POISON.type:
        return this.POKEMON_TYPE_POISON.color;
      case this.POKEMON_TYPE_FAIRY.type:
        return this.POKEMON_TYPE_FAIRY.color;
      case this.POKEMON_TYPE_GHOST.type:
        return this.POKEMON_TYPE_GHOST.color;
      case this.POKEMON_TYPE_PSYCHIC.type:
        return this.POKEMON_TYPE_PSYCHIC.color;
      case this.POKEMON_TYPE_GROUND.type:
        return this.POKEMON_TYPE_GROUND.color;
      default:
        return this.POKEMON_TYPE_NORMAL.color;
    }
  }
}
