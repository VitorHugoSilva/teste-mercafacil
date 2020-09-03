import {DefaultCrudRepository} from '@loopback/repository';
import {ContactVarejao, ContactVarejaoRelations} from '../models';
import {PostgresDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class ContactVarejaoRepository extends DefaultCrudRepository<
  ContactVarejao,
  typeof ContactVarejao.prototype.id,
  ContactVarejaoRelations
> {
  constructor(
    @inject('datasources.postgres') dataSource: PostgresDataSource,
  ) {
    super(ContactVarejao, dataSource);
  }
}
