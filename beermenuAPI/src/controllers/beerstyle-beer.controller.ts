import {repository} from '@loopback/repository';
import {BeerstyleRepository} from '../repositories';
import { post, param, requestBody } from '@loopback/rest';
import { Beer } from '../models';

export class BeerstyleBeerController {
  constructor(
    @repository(BeerstyleRepository) protected beerListRepo: BeerstyleRepository,
  ) {}

  @post('/beerstyles/{id}/beers')
  async create(@param.path.number('id') id: number, @requestBody() beer: Beer) {
    return await this.beerListRepo.beers(id).create(beer);
  }
}
