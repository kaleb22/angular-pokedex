import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonTypeService } from 'src/app/services/pokemon-type.service';
import { PokemonClient } from 'pokenode-ts';
import { PokemonDetailsModel } from 'src/app/model/pokemon-details/pokemon-details.model';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.scss']
})
export class PokemonDetailsComponent implements OnInit {

  constructor(
    private pokemonTypeService: PokemonTypeService,
    private activatedRouter: ActivatedRoute,
  ) { }

  entryNumber: number;
  name: string;
  bgColor: string;
  pokemonDetails = new PokemonDetailsModel();
  requestInit = true;
  firstIndex: number = 1;
  lastIndex: number = 151;

  ngOnInit(): void {
    this.activatedRouter.queryParams.subscribe( param => {
      this.entryNumber = parseInt(param['entryNumber']);
    });

    this.getPokemonInfosById(this.entryNumber);
  }

  async getPokemonInfosById(entryNumber: number) {
    this.requestInit = true;
    const apiPokemonClient = new PokemonClient({
      cacheOptions: { maxAge: 500000, exclude: { query: false }}
    });

    await apiPokemonClient.getPokemonById(entryNumber)
    .then( response => {
      this.pokemonDetails.abilities = response.abilities;
      this.pokemonDetails.height = response.height;
      this.pokemonDetails.weigth = response.weight;
      this.pokemonDetails.stats = response.stats;
      this.pokemonDetails.types = response.types;
    })
    .catch( error => console.error(error));

    await apiPokemonClient.getPokemonSpeciesById(entryNumber)
    .then( response => {
      let flavorText = response.flavor_text_entries.find( 
        elementDescription => elementDescription.language.name === 'en'
      )
      this.pokemonDetails.description = (flavorText?.flavor_text as string);
      this.name = response.name;
    })
    .catch( error => console.error(error));

    this.bgColor = this.pokemonTypeService.getBackgroundColorByIndex(this.entryNumber);
    
    this.pokemonDetails.stats = this.pokemonDetails.stats.map( (stat, index) => {
      if( index === 1) {
        stat.stat.name = 'atk';
      }
      if(index === 2) {
        stat.stat.name = 'def';
      }
      if(index === 3) {
        stat.stat.name = 'satk';
      }
      if(index === 4) {
        stat.stat.name = 'sdef';
      }
      if(index === 5) {
        stat.stat.name = 'spd';
      }
      return stat;
    })
    this.requestInit = false;
  }


  searchLastPokemonByIndex() {
    this.entryNumber--;
    this.getPokemonInfosById(this.entryNumber);
  }

  getNextPokemonByIndex() {
    this.entryNumber++;
    this.getPokemonInfosById(this.entryNumber);
  }
}
