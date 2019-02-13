import {DefaultCrudRepository, juggler} from '@loopback/repository';
import {Beerstyle} from '../models';
import {BeerStylesDBDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class BeerstyleRepository extends DefaultCrudRepository<
  Beerstyle,
  typeof Beerstyle.prototype.id
> {
  constructor(
    @inject('datasources.beerStylesDB') dataSource: BeerStylesDBDataSource,
  ) {
    super(Beerstyle, dataSource);
  }
}
