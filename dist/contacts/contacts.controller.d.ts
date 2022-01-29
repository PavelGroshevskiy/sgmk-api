import { ContactsService } from './contacts.service';
import { CreateContactDto } from './dto/create-dto';
export declare class ContactsController {
    private readonly contactService;
    constructor(contactService: ContactsService);
    create(dto: CreateContactDto): Promise<import("@typegoose/typegoose").DocumentType<import("./contacts.model").ContactsModel>>;
    delete(id: string): Promise<void>;
    getAll(): Promise<void>;
}
