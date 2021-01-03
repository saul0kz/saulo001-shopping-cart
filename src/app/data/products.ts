import { Item } from "../models/item";

const heineken = new Item(1, 'Cerveja Heieneken 600 ML', 8.40);
const budweiser  = new Item(1, 'Cerveja BudWeiser 600 ML', 6.40);
const guinness  = new Item(1, 'Cerveja Guinness 600 ML', 8.40);

export const products : Item[] = [heineken, budweiser, guinness ];