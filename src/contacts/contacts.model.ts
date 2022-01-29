import {prop} from '@typegoose/typegoose'
import {Base, TimeStamps} from '@typegoose/typegoose/lib/defaultClasses'

export interface ContactsModel extends Base {}

export class ContactsModel extends TimeStamps {
	@prop()
	name: string;

	@prop()
	surname: string;

	@prop()
	description: string;

	@prop()
	phone: number;

}
