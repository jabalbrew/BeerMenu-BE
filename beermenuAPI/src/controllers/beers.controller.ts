import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getFilterSchemaFor,
  getWhereSchemaFor,
  patch,
  put,
  del,
  requestBody,
} from '@loopback/rest';
import {Beer} from '../models';
import {BeerRepository} from '../repositories';

export class BeersController {
  constructor(
    @repository(BeerRepository)
    public beerRepository : BeerRepository,
  ) {}

  @post('/beers', {
    responses: {
      '200': {
        description: 'Beer model instance',
        content: {'application/json': {schema: {'x-ts-type': Beer}}},
      },
    },
  })
  async create(@requestBody() beer: Beer): Promise<Beer> {
    return await this.beerRepository.create(beer);
  }

  @get('/beers/count', {
    responses: {
      '200': {
        description: 'Beer model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Beer)) where?: Where,
  ): Promise<Count> {
    return await this.beerRepository.count(where);
  }

  @get('/beers', {
    responses: {
      '200': {
        description: 'Array of Beer model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': Beer}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Beer)) filter?: Filter,
  ): Promise<Beer[]> {
    return await this.beerRepository.find(filter);
  }

  @patch('/beers', {
    responses: {
      '200': {
        description: 'Beer PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody() beer: Beer,
    @param.query.object('where', getWhereSchemaFor(Beer)) where?: Where,
  ): Promise<Count> {
    return await this.beerRepository.updateAll(beer, where);
  }

  @get('/beers/{id}', {
    responses: {
      '200': {
        description: 'Beer model instance',
        content: {'application/json': {schema: {'x-ts-type': Beer}}},
      },
    },
  })
  async findById(@param.path.number('id') id: number): Promise<Beer> {
    return await this.beerRepository.findById(id);
  }

  @patch('/beers/{id}', {
    responses: {
      '204': {
        description: 'Beer PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody() beer: Beer,
  ): Promise<void> {
    await this.beerRepository.updateById(id, beer);
  }

  @put('/beers/{id}', {
    responses: {
      '204': {
        description: 'Beer PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() beer: Beer,
  ): Promise<void> {
    await this.beerRepository.replaceById(id, beer);
  }

  @del('/beers/{id}', {
    responses: {
      '204': {
        description: 'Beer DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.beerRepository.deleteById(id);
  }
}
