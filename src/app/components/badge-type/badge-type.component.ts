import { Component, Input, OnInit } from '@angular/core';
import { PokemonTypeService } from 'src/app/services/pokemon-type.service';

@Component({
  selector: 'app-badge-type',
  templateUrl: './badge-type.component.html',
  styleUrls: ['./badge-type.component.scss']
})
export class BadgeTypeComponent implements OnInit {

  constructor(private pokemonTypeService: PokemonTypeService) { }

  @Input() type: string;

  bgColor: string;

  ngOnInit(): void {
    this.bgColor = this.pokemonTypeService.getBackgroundColorByType(this.type);
  }

}
