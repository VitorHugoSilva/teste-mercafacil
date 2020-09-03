import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class ContactMacapa extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  name: string;

  @property({
    type: 'string',
    required: true,
  })
  cellphone: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<ContactMacapa>) {
    super(data);
  }
}

export interface ContactMacapaRelations {
  // describe navigational properties here
}

export type ContactMacapaWithRelations = ContactMacapa & ContactMacapaRelations;
