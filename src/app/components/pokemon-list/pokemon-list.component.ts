import { Component, OnInit } from '@angular/core';
import { GameClient, Pokedex, PokemonEntry } from 'pokenode-ts';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {

  constructor() { }

  POKEMON_KANTO_ID = 2;
  pokemonList: PokemonEntry[];
  showMorePokemon = false;
  pokemonListToShow: number;
  requestInit = true;
  POKEMON_STORAGE_KEY: string = 'pokemonStorageKey'

  ngOnInit(): void {
    this.requestPokemonList();
    
    if(sessionStorage.getItem(this.POKEMON_STORAGE_KEY)) {
      this.pokemonListToShow = parseInt(sessionStorage.getItem(this.POKEMON_STORAGE_KEY) as string);
    } else {
      this.pokemonListToShow = 10;
    }

    console.log(this.pokemonListToShow);
  }

  async requestPokemonList() {
    const apiGameClient = new GameClient({
      cacheOptions: { maxAge: 500000, exclude: { query: false }}
    });

    let pokeResponse = await apiGameClient
        .getPokedexById(this.POKEMON_KANTO_ID)
        .then( response => {
           return ( response.pokemon_entries as PokemonEntry[] )
        })
        .catch(error => console.error(error));

    this.pokemonList = pokeResponse as PokemonEntry[];
    this.requestInit = false;
  }

  loadMorePokemon() {
    this.pokemonListToShow = this.pokemonListToShow + 10;
    sessionStorage.setItem(this.POKEMON_STORAGE_KEY, this.pokemonListToShow.toString());
  }
}
