import {DefaultCrudRepository, juggler} from '@loopback/repository';
import {Beer} from '../models';
import {MongoDBDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class BeerRepository extends DefaultCrudRepository<
  Beer,
  typeof Beer.prototype.id
> {
  constructor(
    @inject('datasources.MongoDB') dataSource: MongoDBDataSource,
  ) {
    super(Beer, dataSource);
  }
}
