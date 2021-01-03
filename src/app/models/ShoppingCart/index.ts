import { Item } from "../item";

export class ShoppingCart {
  private _items: Item[] = [];

  constructor() {
    this._items = [];
  }

  add(item: Item): void {
    //todo check
    console.log("add");
  this._items.push(item);
  console.log(this._items);
  }

  remove(item: Item): void {
    console.log("remove");
    const id = this._items.indexOf(item);
    this._items.splice(id, 1);
  }

  paraArray(): Item[] {
    return ([] as Item[]).concat(this._items);
  }
  
  total () : number {
    return this._items.reduce(function (acc, curr) {
      return acc +  curr.valor;
  },0);
  
  }


}
