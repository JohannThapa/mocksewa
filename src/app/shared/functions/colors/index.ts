/**
 * https://medium.muz.li/the-science-of-color-contrast-an-expert-designers-guide-33e84c41d156
 * https://www.w3.org/TR/WCAG20-TECHS/G17.html
 * https://www.w3.org/TR/WCAG20/#relativeluminancedef
 */

enum TypeEnum {
    WHITE = 'white',
    LIGHT = 'light',
    DARK = 'dark',
    BLACK = 'black',
}

export type RgbColor = [number, number, number];
export type ColorType =
    | TypeEnum.WHITE
    | TypeEnum.LIGHT
    | TypeEnum.DARK
    | TypeEnum.BLACK;

export function hexToRgb(hex: string): RgbColor | any {
    if (!/^#(([A-Fa-f0-9]{3}){1,2})$/.test(hex)) {
        return null;
    }

    hex = hex.substring(1);
    let rgb;

    if (hex.length === 3) {
        rgb = hex.match(/./g)?.map((x) => x + x);
    } else {
        rgb = hex.match(/.{2}/g);
    }

    return rgb?.map((x) => parseInt(x, 16));
}

export function luminance(color: string): number | null {
    let rgb = hexToRgb(color);

    if (!rgb) {
        return null;
    }

    rgb = rgb
        .map((x: number) => x / 255)
        .map((x: number) => {
            if (x <= 0.03928) {
                return x / 12.92;
            } else {
                return Math.pow((x + 0.055) / 1.055, 2.4);
            }
        }) as RgbColor;

    return 0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2];
}

export function contrast(color1: string, color2: string): number | null {
    const l1 = luminance(color1);
    const l2 = luminance(color2);

    if (l1 === null || l2 === null) {
        return null;
    }

    return (Math.max(l1, l2) + 0.05) / (Math.min(l1, l2) + 0.05);
}

const cache: { [color: string]: ColorType } = {};

export function colorType(color: string): ColorType {
    if (color in cache) {
        return cache[color];
    }

    const whiteContras = contrast(color, '#fff')!;
    const blackContras = contrast(color, '#000')!;
    let result;

    if (whiteContras === 1 && blackContras === 21) {
        result = TypeEnum.WHITE;
    } else if (whiteContras === 21 && blackContras === 1) {
        result = TypeEnum.BLACK;
    } else if (whiteContras >= 3 && blackContras < 10) {
        result = TypeEnum.DARK;
    } else {
        result = TypeEnum.LIGHT;
    }

    return (cache[color] = result);
}
