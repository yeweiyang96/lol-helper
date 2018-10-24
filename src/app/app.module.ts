import {BrowserModule} from '@angular/platform-browser';
import {LOCALE_ID, NgModule} from '@angular/core';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {LayoutModule} from '@angular/cdk/layout';
import {HttpClientModule} from '@angular/common/http';
import {
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatButtonToggleModule,
  MatTableModule,
  MatDialogModule,
  MatSlideToggleModule,
  MatMenuModule,
  MatGridListModule,
  MatExpansionModule,
  MatTabsModule,
  MatCardModule
} from '@angular/material';
import {AppComponent} from './app.component';
import {ThemePickerComponent} from './theme-picker/theme-picker.component';
import {StyleManager} from './theme-picker/style-manager.service';
import {ThemeStorage} from './theme-picker/theme-storage/theme-storage.service';
import {AppRoutingModule} from './app-routing.module';
import {IndexComponent} from './index/index.component';
import {GameinfoComponent} from './gameinfo/gameinfo.component';
import {ChampionsComponent} from './champions/champions.component';
import {NavigationComponent} from './navigation/navigation.component';
import {ChampionDetailComponent} from './champion-detail/champion-detail.component';
import {SpellDetailDialogComponent} from './spell-detail-dialog/spell-detail-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ThemePickerComponent,
    IndexComponent,
    GameinfoComponent,
    ChampionsComponent,
    ChampionDetailComponent,
    SpellDetailDialogComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatSlideToggleModule,
    MatMenuModule,
    MatGridListModule,
    AppRoutingModule,
    MatCardModule,
    MatExpansionModule,
    MatTabsModule,
    MatButtonToggleModule,
    MatTableModule,
    MatDialogModule,
  ],
  providers: [
    ThemeStorage,
    StyleManager,
    {
      provide: LOCALE_ID,
      useValue: 'zh-Hans'
    }
  ],
  entryComponents: [
    SpellDetailDialogComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
