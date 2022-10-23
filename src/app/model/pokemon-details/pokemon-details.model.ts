import { PokemonType, PokemonStat, PokemonAbility } from "pokenode-ts";

export class PokemonDetailsModel {
  abilities: PokemonAbility[];
  stats: PokemonStat[];
  types: PokemonType[];
  height: number;
  weigth: number;
  description: string;
 }
