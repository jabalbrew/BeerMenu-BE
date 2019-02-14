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
import {Beerstyle} from '../models';
import {BeerstyleRepository} from '../repositories';

export class BeerstyleController {
  constructor(
    @repository(BeerstyleRepository)
    public beerstyleRepository : BeerstyleRepository,
  ) {}

  @post('/beerstyles', {
    responses: {
      '200': {
        description: 'Beerstyle model instance',
        content: {'application/json': {schema: {'x-ts-type': Beerstyle}}},
      },
    },
  })
  async create(@requestBody() beerstyle: Beerstyle): Promise<Beerstyle> {
    return await this.beerstyleRepository.create(beerstyle);
  }

  @get('/beerstyles/count', {
    responses: {
      '200': {
        description: 'Beerstyle model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Beerstyle)) where?: Where,
  ): Promise<Count> {
    return await this.beerstyleRepository.count(where);
  }

  @get('/beerstyles', {
    responses: {
      '200': {
        description: 'Array of Beerstyle model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': Beerstyle}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Beerstyle)) filter?: Filter,
  ): Promise<Beerstyle[]> {
    return await this.beerstyleRepository.find(filter);
  }

  @patch('/beerstyles', {
    responses: {
      '200': {
        description: 'Beerstyle PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody() beerstyle: Beerstyle,
    @param.query.object('where', getWhereSchemaFor(Beerstyle)) where?: Where,
  ): Promise<Count> {
    return await this.beerstyleRepository.updateAll(beerstyle, where);
  }

  @get('/beerstyles/{id}', {
    responses: {
      '200': {
        description: 'Beerstyle model instance',
        content: {'application/json': {schema: {'x-ts-type': Beerstyle}}},
      },
    },
  })
  async findById(@param.path.number('id') id: number): Promise<Beerstyle> {
    return await this.beerstyleRepository.findById(id);
  }

  @patch('/beerstyles/{id}', {
    responses: {
      '204': {
        description: 'Beerstyle PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody() beerstyle: Beerstyle,
  ): Promise<void> {
    await this.beerstyleRepository.updateById(id, beerstyle);
  }

  @put('/beerstyles/{id}', {
    responses: {
      '204': {
        description: 'Beerstyle PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() beerstyle: Beerstyle,
  ): Promise<void> {
    await this.beerstyleRepository.replaceById(id, beerstyle);
  }

  @del('/beerstyles/{id}', {
    responses: {
      '204': {
        description: 'Beerstyle DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.beerstyleRepository.deleteById(id);
  }
}
