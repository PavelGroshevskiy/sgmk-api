import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Post } from '@nestjs/common';
import { ContactsService } from './contacts.service';
import { CreateContactDto } from './dto/create-dto';

@Controller('contacts')
export class ContactsController {

	constructor(private readonly contactService: ContactsService) {

	}

	@Post('create')
	async create(@Body() dto: CreateContactDto) {
		return this.contactService.create(dto)
	}

	@Delete(':id')
	async delete(@Param('id') id: string) {
		const deleted = await this.contactService.delete(id);
		if(!deleted) {
			throw new HttpException('', HttpStatus.NOT_FOUND)
		}
	}

	@Get()
	async getAll() {
		this.contactService.getAll()
	}
}
