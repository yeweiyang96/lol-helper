import {Component, Inject, OnInit} from '@angular/core';
import { MAT_DIALOG_DATA} from '@angular/material';
import {Spells} from '../../pojo/champion/spells/spells';

@Component({
  selector: 'app-spell-detail-dialog',
  templateUrl: './spell-detail-dialog.component.html',
  styleUrls: ['./spell-detail-dialog.component.scss']
})
export class SpellDetailDialogComponent implements OnInit {
  tooltipContent: string;

  constructor(@Inject(MAT_DIALOG_DATA) public data: Spells) {
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
