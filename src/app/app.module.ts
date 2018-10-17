import {BrowserModule} from '@angular/platform-browser';
import {LOCALE_ID, NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NavigationComponent} from './navigation/navigation.component';
import {LayoutModule} from '@angular/cdk/layout';
import {MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule} from '@angular/material';
import {MatSlideToggleModule, MatMenuModule, MatGridListModule, MatExpansionModule} from '@angular/material';
import {ThemePickerComponent} from './theme-picker/theme-picker.component';
import {StyleManager} from './theme-picker/style-manager.service';
import {ThemeStorage} from './theme-picker/theme-storage/theme-storage.service';
import {AppRoutingModule} from './app-routing.module';
import {IndexComponent} from './index/index.component';
import {MatCardModule} from '@angular/material';
import {GameinfoComponent} from './gameinfo/gameinfo.component';
import {ChampionsComponent} from './champions/champions.component';
import {HttpClientModule} from '@angular/common/http';
import {ChampionDetailComponent} from './champion-detail/champion-detail.component';

import {ScrollDispatchModule} from '@angular/cdk/scrolling';




@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ThemePickerComponent,
    IndexComponent,
    GameinfoComponent,
    ChampionsComponent,
    ChampionDetailComponent,
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
    ScrollDispatchModule
  ],
  providers: [
    ThemeStorage,
    StyleManager,
    {
      provide: LOCALE_ID,
      useValue: 'zh-Hans'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
