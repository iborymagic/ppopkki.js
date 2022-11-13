import { cardInfoSchema } from "./card-info";
import { object, array, InferType, number } from 'yup';

export const formResultSchema = object({
    cardInfos: array(cardInfoSchema).required(),
    n: number().required()
});

export function isFormResult(value: unknown): value is FormResult {
    return formResultSchema.isType(value);
}

export type FormResult = InferType<typeof formResultSchema>;