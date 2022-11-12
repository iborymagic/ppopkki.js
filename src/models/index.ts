import { nanoid } from 'nanoid';
import TSON from 'typescript-json';

// https://github.com/ymssx/ygo-card/tree/master/source/mold/frame
export const cardTypes = [
  "monster",
  "monster_cl",
  "monster_lj",
  "monster_rh",
  "monster_tc",
  "monster_tk",
  "monster_tt",
  "monster_xg",
  "monster_ys",
  "spell",
  "trap",
] as const;

export type CardType = typeof cardTypes[number];

type Item = {
  checked: boolean;
  id: string;
  name: string;
  url: string;
  type: CardType;
};


export const isItems = (value: unknown): value is Item[] => {
  return !!TSON.validate<Item[]>(value)?.success;
};


export const defaultItem: Item = {
  id: nanoid(),
  name: "",
  url: "",
  checked: true,
  type: "monster",
};
 

export default Item;