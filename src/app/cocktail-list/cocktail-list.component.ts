import { Component, OnInit } from '@angular/core';
import { Cocktail } from '../cocktail';
import { CocktailService } from '../cocktail.service';

@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrls: ['./cocktail-list.component.scss']
})
export class CocktailListComponent implements OnInit {

  cocktails: Cocktail [] = [];

  constructor(public serviceCocktail: CocktailService) { }

  ngOnInit(): void {
    this.cocktails = this.serviceCocktail.getCocktails();
    console.log(this.cocktails);
  }
  
};

