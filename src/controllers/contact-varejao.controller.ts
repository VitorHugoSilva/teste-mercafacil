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
import {ContactVarejao} from '../models';
import {ContactVarejaoRepository} from '../repositories';

export class ContactVarejaoController {
  constructor(
    @repository(ContactVarejaoRepository)
    public contactVarejaoRepository : ContactVarejaoRepository,
  ) {}

  @post('/contacts-verejao', {
    responses: {
      '200': {
        description: 'ContactVarejao model instance',
        content: {'application/json': {schema: getModelSchemaRef(ContactVarejao)}},
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
                    name: {type:'string', minLength: 5, maxLength: 100},
                    cellphone: {type:'string', minLength: 13, maxLength: 13, pattern:"^(\\d{13})?$"},
                  },
                }},
            },
            required: ['contacts'],
          },
        },
      },
    })
    contactVarejao: ContactVarejao,
  ): Promise<ContactVarejao[]> {
    return this.contactVarejaoRepository.createAll(contactVarejao.contacts);
  }

  @get('/contacts-verejao/count', {
    responses: {
      '200': {
        description: 'ContactVarejao model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(ContactVarejao) where?: Where<ContactVarejao>,
  ): Promise<Count> {
    return this.contactVarejaoRepository.count(where);
  }

  @get('/contacts-verejao', {
    responses: {
      '200': {
        description: 'Array of ContactVarejao model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(ContactVarejao, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(ContactVarejao) filter?: Filter<ContactVarejao>,
  ): Promise<ContactVarejao[]> {
    return this.contactVarejaoRepository.find(filter);
  }

  @patch('/contacts-verejao', {
    responses: {
      '200': {
        description: 'ContactVarejao PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ContactVarejao, {partial: true}),
        },
      },
    })
    contactVarejao: ContactVarejao,
    @param.where(ContactVarejao) where?: Where<ContactVarejao>,
  ): Promise<Count> {
    return this.contactVarejaoRepository.updateAll(contactVarejao, where);
  }

  @get('/contacts-verejao/{id}', {
    responses: {
      '200': {
        description: 'ContactVarejao model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(ContactVarejao, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(ContactVarejao, {exclude: 'where'}) filter?: FilterExcludingWhere<ContactVarejao>
  ): Promise<ContactVarejao> {
    return this.contactVarejaoRepository.findById(id, filter);
  }

  @patch('/contacts-verejao/{id}', {
    responses: {
      '204': {
        description: 'ContactVarejao PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ContactVarejao, {partial: true}),
        },
      },
    })
    contactVarejao: ContactVarejao,
  ): Promise<void> {
    await this.contactVarejaoRepository.updateById(id, contactVarejao);
  }

  @put('/contacts-verejao/{id}', {
    responses: {
      '204': {
        description: 'ContactVarejao PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() contactVarejao: ContactVarejao,
  ): Promise<void> {
    await this.contactVarejaoRepository.replaceById(id, contactVarejao);
  }

  @del('/contacts-verejao/{id}', {
    responses: {
      '204': {
        description: 'ContactVarejao DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.contactVarejaoRepository.deleteById(id);
  }
}
