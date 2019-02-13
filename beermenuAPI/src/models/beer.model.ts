import {Entity, model, property} from '@loopback/repository';

@model()
export class Beer extends Entity {
  @property({
    type: 'number',
    id: true,
  })
  id: number;

  @property({
    type: 'string',
    required: true,
  })
  name: string;

  @property({
    type: 'number',
    required: true,
  })
  abv: number;

  @property({
    type: 'number',
  })
  ibu?: number;

  @property({
    type: 'number',
  })
  gravity?: number;

  @property({
    type: 'number',
  })
  color?: number;

  @property({
    type: 'string',
  })
  description?: string;

  constructor(data?: Partial<Beer>) {
    super(data);
  }
}
