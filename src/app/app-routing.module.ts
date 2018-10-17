import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {IndexComponent} from './index/index.component';
import {GameinfoComponent} from './gameinfo/gameinfo.component';
import {ChampionsComponent} from './champions/champions.component';
import {ChampionDetailComponent} from './champion-detail/champion-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/首页', pathMatch: 'full' },
  {path: '首页', component: IndexComponent },
  {path: '资料库', component: GameinfoComponent },
  {path: '英雄资料', component: ChampionsComponent},
  {path: '英雄资料/:id', component: ChampionDetailComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
