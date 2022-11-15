import { nanoid } from "nanoid";
import { object, string, boolean, array, InferType } from 'yup'
import { cardTypeSchema } from "./card-type";

const itemSchema = object({
    checked: boolean().required().default(true),
    id: string().required().default(nanoid()),
    name: string().required().default(""),
    url: string().required().default(""),
    type: cardTypeSchema.required().default("monster"),
})

const itemsSchema = array(itemSchema);

export type Item = InferType<typeof itemSchema>

export const isItem = (value: unknown): value is Item => {
    return itemSchema.isType(value)
}


export const isItems = (value: unknown): value is Item[] => {
    return itemsSchema.isType(value);
};

export const defaultItem = itemSchema.getDefault();