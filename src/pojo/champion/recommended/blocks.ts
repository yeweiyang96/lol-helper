import {Items} from './items';

export class Blocks {
  type: string;

  recMath: boolean;

  recSteps: boolean;

  minSummonerLevel: number;

  maxSummonerLevel: number;

  showIfSummonerSpell: string;

  hideIfSummonerSpell: string;

  appendAfterSection: string;

  visibleWithAllOf: string[];

  hiddenWithAnyOf: string[];

  items: Items[];
}
