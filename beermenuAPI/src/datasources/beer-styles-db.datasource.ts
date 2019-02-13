import {inject} from '@loopback/core';
import {juggler} from '@loopback/repository';
import * as config from './beer-styles-db.datasource.json';

export class BeerStylesDBDataSource extends juggler.DataSource {
  static dataSourceName = 'beerStylesDB';

  constructor(
    @inject('datasources.config.beerStylesDB', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
