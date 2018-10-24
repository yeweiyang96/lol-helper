import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ChampionsService} from '../champions.service';
import {Championjson} from '../../pojo/championjson';
import {Champion} from '../../pojo/champion/champion';
// import {Location} from '@angular/common';
import {MatDialog} from '@angular/material';
import {SpellDetailDialogComponent} from '../spell-detail-dialog/spell-detail-dialog.component';

export interface PeriodicElement {
  name: string;
  position: number;
  value: number;
  levelValue: number; // 每级增长的值
}

@Component({
  selector: 'app-champion-detail',
  templateUrl: './champion-detail(new).component.html',
  styleUrls: ['./champion-detail.component.scss'],
})
export class ChampionDetailComponent implements OnInit {
  champion: Champion;
  backGroundUrl: string;
  iconUrl: string;
  primary: string;
  accent: string;
  ELEMENT_DATA: PeriodicElement[];
  displayedColumns: string[];


  constructor(private route: ActivatedRoute,
              private championsService: ChampionsService,
             // private location: Location,
              public dialog: MatDialog,
  ) {
  }

  ngOnInit() {
    this.getHero();
    this.backGroundUrl = 'url("http://localhost:4200/lol/img/champion/splash/' + this.route.snapshot.paramMap.get('id') + '_0.jpg")';
    this.iconUrl = 'http://localhost:4200/lol/8.20.1/img/champion/' + this.route.snapshot.paramMap.get('id') + '.png';
    this.primary = 'primary';
    this.accent = 'accent';
    this.displayedColumns = ['position', 'name', 'value', 'levelValue'];

  }


  getHero(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.championsService.getHero(id)
      .subscribe((q: Championjson) => {
        const h: Champion = null;
        for (const o in q.data) {
          if (q.data.hasOwnProperty(o)) {
            eval('h = q.data.' + o + ';');
            this.champion = h;
          }
        }
        this.dataCreate(h);
      });
  }

  /*goBack(): void {
    this.location.back();
  }*/

  dataCreate(h: Champion) {
    const attackSpeed: number = 0.625 / (1 + h.stats.attackspeedoffset);
    this.ELEMENT_DATA = [
      {position: 1, name: '攻击力', value: h.stats.attackdamage, levelValue: h.stats.attackdamageperlevel},
      {position: 2, name: '移动速度', value: h.stats.movespeed, levelValue: 0},
      {position: 3, name: '生命值', value: h.stats.hp, levelValue: h.stats.hpperlevel},
      {position: 4, name: h.partype + '值', value: h.stats.mp, levelValue: h.stats.mpperlevel},
      {position: 5, name: '护甲', value: h.stats.armor, levelValue: h.stats.armorperlevel},
      {position: 6, name: '魔抗', value: h.stats.spellblock, levelValue: h.stats.spellblockperlevel},
      {position: 7, name: '攻击速度', value: parseFloat(attackSpeed.toFixed(2)), levelValue: h.stats.attackspeedperlevel},
      {position: 8, name: '攻击范围', value: h.stats.attackrange, levelValue: 0},
      {position: 9, name: '生命值回复', value: h.stats.hpregen, levelValue: h.stats.hpregenperlevel},
      {position: 10, name: '法力值回复', value: h.stats.mpregen, levelValue: h.stats.mpregenperlevel},
    ];
  }

  openDialog(i: number) {
    this.dialog.open(SpellDetailDialogComponent, {
      data: this.champion.spells[i]
    });
  }

}

