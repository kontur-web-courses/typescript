export enum VehicleType {
    sedan,
    hatchback,
    roadster,
    coupe,
    minivan
}

export const vehicleTypes: VehicleType[] = [
    VehicleType.sedan,
    VehicleType.hatchback,
    VehicleType.roadster,
    VehicleType.coupe,
    VehicleType.minivan
];

export const vehicleTypeTitles: Record<VehicleType, string> = {
    [VehicleType.sedan]: "Седан",
    [VehicleType.hatchback]: "Хэтчбэк",
    [VehicleType.roadster]: "Роадстер",
    [VehicleType.coupe]: "Купэ",
    [VehicleType.minivan]: "Минивэн"
};

export interface Vehicle {
    id: string;
    type: VehicleType;
    title: string;
    price: number;
}

export interface VehicleFilter {
    title: string;
    type: VehicleType | null;
}
