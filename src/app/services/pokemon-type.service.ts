import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokemonTypeService {

  constructor() { }

  POKEMON_TYPE_FIRE_FIGHT_DRAGON = {index: 0, color: '#F76545'};
  POKEMON_TYPE_GRASS_BUG = {index: 1, color: '#70A83B'};
  POKEMON_TYPE_WATER_ICE = {index: 2, color: '#76AADB'};
  POKEMON_TYPE_ELETRIC = {index: 3, color: '#F7C545'};
  POKEMON_TYPE_ROCK = {index: 4, color: '#A1A1A1'};
  POKEMON_TYPE_POISON_PSYCHIC_FAIRY_GHOST = {index: 5, color: '#A974BC'};
  POKEMON_TYPE_GROUND_NORMAL = {index: 6, color: '#9B897B'};

  listPokemonTypesByIndex = [
    [4,5,6,37,38,58,59,77,78,126,136,146,56,57,62,66,67,68,106,107,147,148,149],
    [10,11,12,13,14,15,46,47,48,49,123,127,1,2,3,43,44,45,69,70,71,102,103,114,],
    [124,131,144,7,8,9,54,55,60,61,62,72,73,79,80,86,87,90,91,98,99,116,117,118,119,120,121,129,130,131,134],
    [25,26,81,82,100,101,125,135,145],
    [74,75,76,95,138,139,140,141,142],
    [23,24,29,30,31,32,33,34,41,42,88,89,109,110,63,64,65,96,97,122,150,151,35,36,92,93,94],
    [27,28,50,51,104,105,111,112,16,17,18,19,20,21,22,39,40,52,53,83,84,85,108,113,115,128,132,133,137,143],
  ];

  getBackgroundColorByIndex(pokemonIndex: number): string {

    if( this.listPokemonTypesByIndex[this.POKEMON_TYPE_FIRE_FIGHT_DRAGON.index].find( index => index === pokemonIndex) ) {
      return this.POKEMON_TYPE_FIRE_FIGHT_DRAGON.color;
    }

    if( this.listPokemonTypesByIndex[this.POKEMON_TYPE_GRASS_BUG.index].find(index => index === pokemonIndex) ) {
      return this.POKEMON_TYPE_GRASS_BUG.color;
    }

    if( this.listPokemonTypesByIndex[this.POKEMON_TYPE_WATER_ICE.index].find(index => index === pokemonIndex) ) {
      return this.POKEMON_TYPE_WATER_ICE.color;
    }

    if( this.listPokemonTypesByIndex[this.POKEMON_TYPE_ELETRIC.index].find(index => index === pokemonIndex) ) {
      return this.POKEMON_TYPE_ELETRIC.color;
    }

    if( this.listPokemonTypesByIndex[this.POKEMON_TYPE_ROCK.index].find(index => index === pokemonIndex) ) {
      return this.POKEMON_TYPE_ROCK.color;
    }

    if( this.listPokemonTypesByIndex[this.POKEMON_TYPE_POISON_PSYCHIC_FAIRY_GHOST.index].find(index => index === pokemonIndex) ) {
      return this.POKEMON_TYPE_POISON_PSYCHIC_FAIRY_GHOST.color;
    }

     return this.POKEMON_TYPE_GROUND_NORMAL.color;
  }
}
