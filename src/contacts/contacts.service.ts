import { Injectable } from '@nestjs/common';
import { ModelType, DocumentType } from '@typegoose/typegoose/lib/types';
import { Types } from 'mongoose';
import { InjectModel } from 'nestjs-typegoose';
import { ContactsModel } from './contacts.model';
import { CreateContactDto } from './dto/create-dto';

@Injectable()
export class ContactsService {
	constructor(@InjectModel(ContactsModel) private readonly contactsModel: ModelType<ContactsModel>) {}

	private contacts = []

		async create (dto: CreateContactDto): Promise<DocumentType<ContactsModel>> {
			return this.contactsModel.create(dto)
		}

		async delete (id: string): Promise<DocumentType<ContactsModel> | null> {
			return this.contactsModel.findByIdAndDelete(id).exec()
		}

		async getAll(): Promise<DocumentType<ContactsModel>[]> {
		return this.contactsModel.find({ productId: Types.ObjectId() }).exec();
		}
}
