import {Recommended} from './recommended/recommended';
import {Spells} from './spells/spells';
import {Image} from '../image';
import {Info} from '../info';
import {Stats} from '../stats';
import {Skins} from './skins';
import {Passive} from './passive';

export class Champion {
  id: string;

  key: string;

  name: string;

  title: string;

  image: Image;

  skins: Skins[] ;

  lore: string;

  blurb: string;

  allytips: string[] ;

  enemytips: string[] ;

  tags: string[] ;

  partype: string;

  info: Info;

  stats: Stats;

  spells: Spells[] ;

  passive: Passive;

  recommended: Recommended[] ;
}

