import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonTypeService } from 'src/app/services/pokemon-type.service';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.scss']
})
export class PokemonDetailsComponent implements OnInit {

  constructor(
    private pokemonTypeService: PokemonTypeService,
    private activatedRouter: ActivatedRoute
  ) { }

  entryNumber: number;
  name: string;
  bgColor: string;

  ngOnInit(): void {
    this.activatedRouter.queryParams.subscribe( param => {
      this.entryNumber = parseInt(param['entryNumber']);
      this.name = param['name'];
      this.bgColor = this.pokemonTypeService.getBackgroundColorByIndex(this.entryNumber);
      console.log(this.bgColor);
    });

  }

}
