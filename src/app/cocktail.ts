export class Cocktail {

  name: string;  // propriété et sa valeur
  price: number;
  picture: string;

  constructor(name: string, price: number, picture: string) {

    this.name = name;
    this.price = price;
    this.picture = picture;
  }
}
