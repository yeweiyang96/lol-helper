import {Leveltip} from './leveltip';
import {Image} from '../../image';
import {Datavalues} from './datavalues';
import {Vars} from './vars';

export class Spells {
  id: string;

  name: string;

  description: string;

  tooltip: string;

  leveltip: Leveltip;

  maxrank: number;

  cooldown: number[];

  cooldownBurn: string;

  cost:  number[];

  costBurn: string;

  datavalues: Datavalues;

  effect: number[][];

  effectBurn: string[];

  vars: Vars[];

  costType: string;

  maxammo: string;

  range: number[];

  rangeBurn: string;

  image: Image;

  resource: string;
}
