import {DefaultCrudRepository, HasManyRepositoryFactory, repository} from '@loopback/repository';
import {Beerstyle, Beer} from '../models';
import {BeerRepository} from './beer.repository';
import {MongoDBDataSource} from '../datasources';
import {inject, Getter} from '@loopback/core';

export class BeerstyleRepository extends DefaultCrudRepository<
  Beerstyle,
  typeof Beerstyle.prototype.id
> {
  public readonly beers: HasManyRepositoryFactory<
    Beer,
    typeof Beerstyle.prototype.id
  >;
  constructor(
    @inject('datasources.MongoDB') dataSource: MongoDBDataSource,
    @repository.getter(BeerRepository)
    protected getBeerRepository: Getter<BeerRepository>,
  ) {
    super(Beerstyle, dataSource);
    this.beers = this.createHasManyRepositoryFactoryFor(
      'beers',
      getBeerRepository,
    );
  }
}
