import {DefaultCrudRepository} from '@loopback/repository';
import {ContactMacapa, ContactMacapaRelations} from '../models';
import {MysqlDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class ContactMacapaRepository extends DefaultCrudRepository<
  ContactMacapa,
  typeof ContactMacapa.prototype.id,
  ContactMacapaRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(ContactMacapa, dataSource);
  }

}
