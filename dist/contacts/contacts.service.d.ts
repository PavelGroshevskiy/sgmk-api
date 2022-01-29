import { ModelType, DocumentType } from '@typegoose/typegoose/lib/types';
import { ContactsModel } from './contacts.model';
import { CreateContactDto } from './dto/create-dto';
export declare class ContactsService {
    private readonly contactsModel;
    constructor(contactsModel: ModelType<ContactsModel>);
    private contacts;
    create(dto: CreateContactDto): Promise<DocumentType<ContactsModel>>;
    delete(id: string): Promise<DocumentType<ContactsModel> | null>;
    getAll(): Promise<DocumentType<ContactsModel>[]>;
}
