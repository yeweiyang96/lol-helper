import {
  AfterViewInit,
  Component, ElementRef,
  OnDestroy,
  OnInit, Renderer2,
  ViewChild
} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ChampionsService} from '../champions.service';
import {Championjson} from '../pojo/championjson';
import {Champion} from '../pojo/champion/champion';
import {Location} from '@angular/common';
import {CdkScrollable, ScrollDispatcher, ViewportRuler} from '@angular/cdk/scrolling';
import {MatDialog} from '@angular/material';
import {SpellDetailDialogComponent} from '../spell-detail-dialog/spell-detail-dialog.component';

export interface PeriodicElement {
  name: string;
  position: number;
  value: number;
  levelvalue: number; // 每级增长的值
}

@Component({
  selector: 'app-champion-detail',
  templateUrl: './champion-detail(new).component.html',
  styleUrls: ['./champion-detail.component.scss'],
})
export class ChampionDetailComponent implements OnInit, AfterViewInit, OnDestroy {
  champion: Champion;
  backgroundurl: string;
  // top: string;
  iconurl: string;
  // @ViewChild('scrollAble', {read: CdkScrollable})
  // scrollAble: CdkScrollable;
  // @ViewChild('back', {read: ElementRef})
  // backButton: ElementRef;
  tabLoadTimes: Date[] = [];
  primary: string;
  accent: string;
  attackspeed: number;
  ELEMENT_DATA: PeriodicElement[];
  displayedColumns: string[];


  constructor(private route: ActivatedRoute,
              private championsService: ChampionsService,
              private location: Location,
              private viewPort: ViewportRuler,
              public scrollDispatcher: ScrollDispatcher,
              private elementRef: ElementRef,
              private renderer: Renderer2,
              public dialog: MatDialog,
  ) {
  }

  ngOnInit() {
    this.getHero();
    this.backgroundurl = 'url("http://localhost:4200/lol/img/champion/splash/' + this.route.snapshot.paramMap.get('id') + '_0.jpg")';
    this.iconurl = 'http://localhost:4200/lol/8.20.1/img/champion/' + this.route.snapshot.paramMap.get('id') + '.png';
    this.primary = 'primary';
    this.accent = 'accent';
    this.attackspeed = 0.625;
    this.displayedColumns = ['position', 'name', 'value', 'levelvalue'];


    // this.top = this.viewPort.getViewportSize().width / 3.4 + 'px';
    /*this.viewPort.change().subscribe(_ => {
      this.top = this.viewPort.getViewportSize().width / 3.4 + 'px';
    });*/
    // 注册一个cdkScrollable
    // this.scrollDispatcher.register(this.scrollAble);
  }

  ngOnDestroy() {
    // 注销一个cdkScrollable
    // this.scrollDispatcher.deregister(this.scrollAble);

  }

  ngAfterViewInit() {
    // 模板中的元素已创建完成
    /*this.scrollDispatcher.scrolled().subscribe(_ => {
      this.renderer.setElementStyle(this.backButton.nativeElement, 'display', 'block');
    });
    this.scrollDispatcher.scrolled(3000).subscribe(_ => {
      this.renderer.setElementStyle(this.backButton.nativeElement, 'display', 'none');
    });*/
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

  goBack(): void {
    this.location.back();
  }

  dataCreate(h: Champion) {
    const attackspeed: number = 0.625 / (1 + h.stats.attackspeedoffset);
    this.ELEMENT_DATA = [
      {position: 1, name: '攻击力', value: h.stats.attackdamage, levelvalue: h.stats.attackdamageperlevel},
      {position: 2, name: '移动速度', value: h.stats.movespeed, levelvalue: 0},
      {position: 3, name: '生命值', value: h.stats.hp, levelvalue: h.stats.hpperlevel},
      {position: 4, name: h.partype + '值', value: h.stats.mp, levelvalue: h.stats.mpperlevel},
      {position: 5, name: '护甲', value: h.stats.armor, levelvalue: h.stats.armorperlevel},
      {position: 6, name: '魔抗', value: h.stats.spellblock, levelvalue: h.stats.spellblockperlevel},
      {position: 7, name: '攻击速度', value: parseFloat(attackspeed.toFixed(2)), levelvalue: h.stats.attackspeedperlevel},
      {position: 8, name: '攻击范围', value: h.stats.attackrange, levelvalue: 0},
      {position: 9, name: '生命值回复', value: h.stats.hpregen, levelvalue: h.stats.hpregenperlevel},
      {position: 10, name: '法力值回复', value: h.stats.mpregen, levelvalue: h.stats.mpregenperlevel},
    ];
  }

  openDialog(i: number) {
    const dialogRef = this.dialog.open(SpellDetailDialogComponent, {
      data: this.champion.spells[i]
    });
  }

}

