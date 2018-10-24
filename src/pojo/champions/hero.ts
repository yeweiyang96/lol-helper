import {Info} from '../info';
import {Image} from '../image';
import {Stats} from '../stats';

export class Hero {
  version: string;
  id: string;
  key: string;
  name: string;
  title: string;
  blurb: string;
  info: Info;
  image: Image;
  tags: string[];
  partype: string;
  stats: Stats;
}
