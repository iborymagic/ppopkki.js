import { cardTypeSchema } from "./card-type";
import { object, string, boolean, InferType } from 'yup';

export const cardInfoSchema = object({
    data: object({
        name: string().required(),
        type: string().required(),
        type2: string().optional()
    }),
    pic: string().required(),
    checked: boolean().required(),
    type: cardTypeSchema.required(),
})

export type CardInfo = InferType<typeof cardInfoSchema>

export const isCardInfo = (value: unknown): value is CardInfo => {
    return cardInfoSchema.isType(value)
}