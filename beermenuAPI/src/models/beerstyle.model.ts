import {Entity, model, property, hasMany} from '@loopback/repository';
import {Beer} from './beer.model';

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

  @hasMany(() => Beer, {keyTo: 'id'})
  beers?: Beer[];

  constructor(data?: Partial<Beerstyle>) {
    super(data);
  }
}
