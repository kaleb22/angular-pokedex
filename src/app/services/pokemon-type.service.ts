import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokemonTypeService {

  constructor() { }

  POKEMON_TYPE_FIRE = 0;
  POKEMON_TYPE_FIGHT = 0;
  POKEMON_TYPE_DRAGON = 0;
  POKEMON_TYPE_GRASS = 1;
  POKEMON_TYPE_BUG = 1;
  POKEMON_TYPE_WATER = 2;
  POKEMON_TYPE_ICE = 2;
  POKEMON_TYPE_ELETRIC = 3;
  POKEMON_TYPE_ROCK = 4;
  POKEMON_TYPE_STELL = 4;
  POKEMON_TYPE_DARK = 4;
  POKEMON_TYPE_POISON = 5;
  POKEMON_TYPE_PSYCHIC = 5;
  POKEMON_TYPE_FAIRY = 5;
  POKEMON_TYPE_GHOST = 5;
  POKEMON_TYPE_GROUND = 6;

}
