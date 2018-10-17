import {Component, ViewChild} from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {MatSidenav} from '@angular/material';



@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
  @ViewChild('drawer') drawer: MatSidenav; // 这个bug我不懂，原本好好的，加了些东西后坏了，非要加这句话才能好。
  select = false;
  style = 'collapsed';

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  selectChange(): void {
    if (this.select === true) {
      this.select = false;
      this.style = 'collapsed';
    } else {
      this.select = true;
      this.style = 'expanded';
    }
  }

  constructor(private breakpointObserver: BreakpointObserver,
  ) {
  }


}
