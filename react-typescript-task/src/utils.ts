export function getRandomElement<T>(array: T[]): T {
    return array[Math.floor(Math.random() * array.length)];
}

export function getRandomDigit(start: number, end: number): number {
    return Math.random() * (end - start) + start;
}

export function round(value: number, fractionDigits = 2): number {
    const multiplier = Math.pow(10, fractionDigits);
    return Math.round((value + Number.EPSILON) * multiplier) / multiplier;
}
