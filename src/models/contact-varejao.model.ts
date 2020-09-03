import {Entity, model, property} from '@loopback/repository';

@model({settings: {

  }})
export class ContactVarejao extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
    jsonSchema: {
      minLength: 5,
      maxLength: 100
    }
  })
  name: string;

  @property({
    type: 'string',
    required: true,
    jsonSchema: {
      minLength: 13,
      maxLength: 13
    }
  })
  cellphone: string;
  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;


  constructor(data?: Partial<ContactVarejao>) {
    super(data);
  }
}

export interface ContactVarejaoRelations {
  // describe navigational properties here
}

export type ContactVarejaoWithRelations = ContactVarejao & ContactVarejaoRelations;
