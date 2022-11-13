import { string, InferType } from 'yup'
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
];

export const cardTypeSchema = string().oneOf(cardTypes);


export function isCardType(value: unknown): value is CardType {
    return cardTypeSchema.isType(value);
}

export type CardType = InferType<typeof cardTypeSchema>;
