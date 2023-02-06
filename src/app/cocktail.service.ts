import { Injectable } from '@angular/core';
import { Cocktail } from './cocktail';



@Injectable({
  providedIn: 'root'
})
export class CocktailService {

  mojito: Cocktail = new Cocktail(
  "mojito", 15, "./assets/mojito1.jpg",);
  cosmopolitain: Cocktail = new Cocktail("cosmopolitain", 12, "./assets/cosmo.jpg",);
  bloodyMary: Cocktail = new Cocktail("bloodyMary", 16, "./assets/bloodyM.jpg",);

  cocktails: Cocktail[] = [this.mojito, this.cosmopolitain, this.bloodyMary];

  constructor() {}




 getCocktails() {
  return this.cocktails;
 }
}
