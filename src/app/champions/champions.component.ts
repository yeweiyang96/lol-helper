import {Component, OnInit} from '@angular/core';
import {Championjson} from '../../pojo/championjson';
import {Hero} from '../../pojo/champions/hero';
import {ChampionsService} from '../champions.service';
import {ViewportRuler} from '@angular/cdk/scrolling';


@Component({
  selector: 'app-champions',
  templateUrl: './champions.component.html',
  styleUrls: ['./champions.component.scss']
})
export class ChampionsComponent implements OnInit {
  heroes: Hero[];
  cols: number;

  constructor(private championsService: ChampionsService,
              private viewPort: ViewportRuler,
  ) {


  }

  ngOnInit() {
    this.mediaChangeCols(this.viewPort.getViewportSize().width);
    this.viewPort.change().subscribe(_ => {
      this.mediaChangeCols(this.viewPort.getViewportSize().width);
    });
    this.getHeroes();

  }

  getHeroes(): void {
    this.championsService.getHeroes()
      .subscribe((q: Championjson) => {
        let i = 0;
        const h: Hero[] = [];
        for (const o in q.data) {
          if (q.data.hasOwnProperty(o)) {
            eval('h.push(q.data.' + o + ');');
            i++;
          }
        }
        this.heroes = h;
      });
  }

  mediaChangeCols(width): void {
    if (width < 500) {
      this.cols = 4;
    } else if (width < 1366) {
      this.cols = 7;
    } else {
      this.cols = 10;
    }


  }

}
