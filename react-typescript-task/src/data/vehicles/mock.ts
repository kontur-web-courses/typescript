import {getRandomDigit, getRandomElement, round} from "../../utils";
import {Vehicle, vehicleTypes} from "./contracts";

const marks: string[] = [
    "BMW",
    "Lada",
    "Jeep",
    "KIA",
    "Subaru",
    "Toyota",
    "Volkswagen"
];

const titles: string[] = [
    "M3",
    "M5",
    "Granta",
    "Kalina",
    "Polo",
    "Grand Cherokee",
    "Rio",
    "Spectra",
    "Impreza",
    "BRZ",
    "Corolla",
    "Golf",
    "Camry"
];

export function generateVehicle(length: number): Vehicle[] {
    return Array.from({length}).map((_, i) => {
        const title = `${getRandomElement(marks)} ${getRandomElement(titles)}`;
        const type = getRandomElement(vehicleTypes);
        return {
            id: i.toString(),
            title,
            type,
            price: round(getRandomDigit(10_000, 5_000_000))
        };
    });
}
