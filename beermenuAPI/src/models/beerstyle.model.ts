import {Entity, model, property} from '@loopback/repository';

@model()
export class Beerstyle extends Entity {
  @property({
    type: 'number',
    id: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  name: string;

  @property({
    type: 'string',
    required: true,
  })
  styleNumber: string;

  constructor(data?: Partial<Beerstyle>) {
    super(data);
  }
}
