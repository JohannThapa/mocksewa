import { INestedLink } from './link';


export interface IMenuBase {
    type: string;
}

export type MegamenuSize = 'xl' | 'lg' | 'md' | 'nl' | 'sm';

export type MegamenuColumnSize = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | '1of1' | '1of2' | '1of3' | '1of4' | '1of5';

export interface IMegamenuColumn {
    size: MegamenuColumnSize;
    links: INestedLink[];
}

export interface Megamenu extends IMenuBase {
    type: 'megamenu';
    size: MegamenuSize;
    image?: string;
    columns: IMegamenuColumn[];
}

export interface Menu extends IMenuBase {
    type: 'menu';
    links: INestedLink[];
}
