import {Component, Inject, OnInit, AfterViewInit, ElementRef, Renderer2, ViewChild} from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material';
import {Spells} from '../pojo/champion/spells/spells';

@Component({
  selector: 'app-spell-detail-dialog',
  templateUrl: './spell-detail-dialog.component.html',
  styleUrls: ['./spell-detail-dialog.component.scss']
})
export class SpellDetailDialogComponent implements OnInit, AfterViewInit {
  @ViewChild('tooltip')
  tooltip: ElementRef;
  tooltipContent: string;

  constructor(@Inject(MAT_DIALOG_DATA) public data: Spells,
              private elementRef: ElementRef,
              private renderer: Renderer2) {
  }

  ngOnInit() {
    this.tooltipContent = this.templateEngine(this.data.tooltip, {
      e0: this.data.effect[0],
      e1:  this.data.effect[1],
      e2: this.data.effect[2],
      e3: this.data.effect[3],
      e4: this.data.effect[4],
      e5:  this.data.effect[5],
      e6: this.data.effect[6],
      e7: this.data.effect[7],
      e8: this.data.effect[8],
      e9:  this.data.effect[9],
      e10: this.data.effect[10],
      a1: '35',
    });
  }

  ngAfterViewInit() {

  }
// 字符串正则表达式匹配替换
  templateEngine(source: string, data) {
    if (!data) {
      return source;
    }
    return source.replace(/{{\s([^\s}}]+)?\s}}/g, function (match, key) {
      return data[key] ? data[key] : '';
    });
  }

}
