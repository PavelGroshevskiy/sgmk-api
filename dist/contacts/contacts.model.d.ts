import { Base, TimeStamps } from '@typegoose/typegoose/lib/defaultClasses';
export interface ContactsModel extends Base {
}
export declare class ContactsModel extends TimeStamps {
    name: string;
    surname: string;
    description: string;
    phone: number;
}
