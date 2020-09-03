import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
} from '@loopback/rest';
import {ContactMacapa} from '../models';
import {ContactMacapaRepository} from '../repositories';

export class ContactMacapaController {
  constructor(
    @repository(ContactMacapaRepository)
    public contactMacapaRepository : ContactMacapaRepository,
  ) {}

  @post('/contacts-macapa', {
    responses: {
      '200': {
        description: 'ContactMacapa model instance',
        content: {'application/json': {schema: getModelSchemaRef(ContactMacapa)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: {
            type: 'object',
            properties: {
              contacts: {
                type: 'array',
                minItems: 1,
                items: {
                  type: 'object',
                  properties: {
                    name: {type:'string', minLength: 5, maxLength: 200},
                    cellphone: {type:'string', minLength: 13, maxLength: 13, pattern:"^(\\d{13})?$"},
                  },
                }},
            },
            required: ['contacts'],
          },
        },
      },
    })
    contactMacapa: ContactMacapa,
  ): Promise<ContactMacapa[]> {
      const list: ContactMacapa[] = contactMacapa.contacts.map((contact: ContactMacapa) => (
        {
          name: contact.name.toUpperCase(),
          cellphone: contact.cellphone.replace(/(\d{2})(\d{2})(\d{5})(\d{4})/, "+$1 ($2) $3-$4")
        }
      ));
     return this.contactMacapaRepository.createAll(list);
  }

  @get('/contacts-macapa/count', {
    responses: {
      '200': {
        description: 'ContactMacapa model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(ContactMacapa) where?: Where<ContactMacapa>,
  ): Promise<Count> {
    return this.contactMacapaRepository.count(where);
  }

  @get('/contacts-macapa', {
    responses: {
      '200': {
        description: 'Array of ContactMacapa model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(ContactMacapa, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(ContactMacapa) filter?: Filter<ContactMacapa>,
  ): Promise<ContactMacapa[]> {
    return this.contactMacapaRepository.find(filter);
  }

  @patch('/contacts-macapa', {
    responses: {
      '200': {
        description: 'ContactMacapa PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ContactMacapa, {partial: true}),
        },
      },
    })
    contactMacapa: ContactMacapa,
    @param.where(ContactMacapa) where?: Where<ContactMacapa>,
  ): Promise<Count> {
    return this.contactMacapaRepository.updateAll(contactMacapa, where);
  }

  @get('/contacts-macapa/{id}', {
    responses: {
      '200': {
        description: 'ContactMacapa model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(ContactMacapa, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(ContactMacapa, {exclude: 'where'}) filter?: FilterExcludingWhere<ContactMacapa>
  ): Promise<ContactMacapa> {
    return this.contactMacapaRepository.findById(id, filter);
  }

  @patch('/contacts-macapa/{id}', {
    responses: {
      '204': {
        description: 'ContactMacapa PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ContactMacapa, {partial: true}),
        },
      },
    })
    contactMacapa: ContactMacapa,
  ): Promise<void> {
    await this.contactMacapaRepository.updateById(id, contactMacapa);
  }

  @put('/contacts-macapa/{id}', {
    responses: {
      '204': {
        description: 'ContactMacapa PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() contactMacapa: ContactMacapa,
  ): Promise<void> {
    await this.contactMacapaRepository.replaceById(id, contactMacapa);
  }

  @del('/contacts-macapa/{id}', {
    responses: {
      '204': {
        description: 'ContactMacapa DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.contactMacapaRepository.deleteById(id);
  }
}
