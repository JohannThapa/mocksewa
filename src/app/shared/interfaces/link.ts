import { ICustomFields } from './custom-fields';

export interface Link {
    title: string;
    url?: string;
    external?: boolean;
    customFields?: ICustomFields;
}

export interface INestedLink extends Link {
    links?: INestedLink[];
}
