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
  requestFinished = false;

  ngOnInit(): void {
    this.activatedRouter.queryParams.subscribe( param => {
      this.entryNumber = parseInt(param['entryNumber']);
      this.name = param['name'];
      this.bgColor = this.pokemonTypeService.getBackgroundColorByIndex(this.entryNumber);
      console.log(this.bgColor);
    });

    this.getPokemonInfosById(this.entryNumber);
  }

  async getPokemonInfosById(entryNumber: number) {
    
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
    .then( response => this.pokemonDetails.description = response.flavor_text_entries[0].flavor_text)
    .catch( error => console.error(error));
    
    this.requestFinished = true;
    console.log('pokemon info => ', this.pokemonDetails);
  }
}