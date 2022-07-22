import { IterableDiffers } from "@angular/core";

export interface Mouse {

    "id"?: number;
    "brand": string;
    "model": string;
    "type": string;
    "year": number;

}

export interface Mineral{
    "id":number,
    "name": string,
    "formula": string,
    "category": string,
    "crystal": string,
    "mohs": number,
    "density": number
}