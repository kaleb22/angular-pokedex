import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { PokemonStat } from 'pokenode-ts';

@Component({
  selector: 'app-stat',
  templateUrl: './stat.component.html',
  styleUrls: ['./stat.component.scss']
})
export class StatComponent implements OnInit {

  constructor(private elementRef: ElementRef) { }

  @Input() stats: PokemonStat;
  @Input() bgColor: string;
  width: number = 0;

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    const width = this.stats.base_stat / 2;
    this.elementRef.nativeElement.style.setProperty('--width', width+'%');
  }

}
