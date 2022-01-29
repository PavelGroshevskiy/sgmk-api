import { Module } from '@nestjs/common';
import { Collection } from 'mongoose';
import { TypegooseModule } from 'nestjs-typegoose';
import { ContactsController } from './contacts.controller';
import { ContactsModel } from './contacts.model';
import { ContactsService } from './contacts.service';

@Module({
	controllers: [ContactsController],
	imports: [
		TypegooseModule.forFeature([
			{
				typegooseClass: ContactsModel,
				schemaOptions: 
					{collection: 'Contact'}
			}
		])
	],
	providers: [ContactsService]
})
export class ContactsModule { }
