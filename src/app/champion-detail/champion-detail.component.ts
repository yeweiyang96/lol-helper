import {
  AfterViewInit,
  Component, ElementRef,
  OnDestroy,
  OnInit, Renderer,
  ViewChild
} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ChampionsService} from '../champions.service';
import {Championjson} from '../pojo/championjson';
import {Champion} from '../pojo/champion/champion';
import {Location} from '@angular/common';
import {CdkScrollable, ScrollDispatcher, ViewportRuler} from '@angular/cdk/scrolling';


@Component({
  selector: 'app-champion-detail',
  templateUrl: './champion-detail.component.html',
  styleUrls: ['./champion-detail.component.scss'],
})
export class ChampionDetailComponent implements OnInit, AfterViewInit, OnDestroy {
  champion: Champion;
  backgroundurl: string;
  top: string;
  iconurl: string;
  @ViewChild('scrollAble', {read: CdkScrollable})
  scrollAble: CdkScrollable;
  @ViewChild('back', {read: ElementRef})
  backButton: ElementRef;

  constructor(private route: ActivatedRoute,
              private championsService: ChampionsService,
              private location: Location,
              private viewPort: ViewportRuler,
              public scrollDispatcher: ScrollDispatcher,
              private elementRef: ElementRef,
              private renderer: Renderer,
  ) {
  }

  ngOnInit() {
    this.top = this.viewPort.getViewportSize().width / 3.4 + 'px';
    this.getHero();
    this.viewPort.change().subscribe(_ => {
      this.top = this.viewPort.getViewportSize().width / 3.4 + 'px';
    });
    // 注册一个cdkScrollable
    this.scrollDispatcher.register(this.scrollAble);
  }

  ngOnDestroy() {
    // 注销一个cdkScrollable
    this.scrollDispatcher.deregister(this.scrollAble);

  }

  ngAfterViewInit() {
    // 模板中的元素已创建完成
    this.scrollDispatcher.scrolled().subscribe(_ => {
      this.renderer.setElementStyle(this.backButton.nativeElement, 'display', 'block');
    });
    this.scrollDispatcher.scrolled(3000).subscribe(_ => {
      this.renderer.setElementStyle(this.backButton.nativeElement, 'display', 'none');

    });
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
        this.backgroundurl = 'url("http://ddragon.leagueoflegends.com/cdn/img/champion/splash/' + h.id + '_0.jpg")';
        this.iconurl = 'url("https://ddragon.leagueoflegends.com/cdn/8.20.1/img/champion/' + h.id + '.png")';
      });
  }

  goBack(): void {
    this.location.back();
  }


}
