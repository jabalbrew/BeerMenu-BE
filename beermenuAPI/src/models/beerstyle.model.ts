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

  @property({
    type: 'number',
  })
  category: number;

  @property({
    type: 'number',
  })
  ABVmin?: number;

  @property({
    type: 'number',
  })
  ABVmax?: number;

  @property({
    type: 'number',
  })
  OGmin?: number;

  @property({
    type: 'number',
  })
  OGmax?: number;

  @property({
    type: 'number',
  })
  FGmin?: number;

  @property({
    type: 'number',
  })
  FGmax?: number;

  @property({
    type: 'number',
  })
  IBUmin?: number;

  @property({
    type: 'number',
  })
  IBUmax?: number;

  @property({
    type: 'number',
  })
  SRMmin?: number;

  @property({
    type: 'number',
  })
  SRMmax?: number;

  constructor(data?: Partial<Beerstyle>) {
    super(data);
  }
}
