import { NgModule } from '@angular/core';
import { BrowserModule, HammerGestureConfig } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTabsModule } from '@angular/material/tabs';
import { HammerModule, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import * as Hammer from 'hammerjs';
import { AppComponent } from './app.component';
import { ProfileListComponent } from './daily-recommendations/profile-list/profile-list.component';
import { ProfileCardComponent } from './daily-recommendations//profile-card/profile-card.component';
import { HttpClientModule } from '@angular/common/http';

import { DailyRecommendationsComponent } from './daily-recommendations/daily-recommendations.component';
import { PendingProfilesComponent } from './pending-profiles/pending-profiles.component';
import { PendingProfileListComponent } from './pending-profiles/pending-profile-list/pending-profile-list.component';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

export class MyHammerConfig extends HammerGestureConfig {
  overrides = {
    swipe: {
      direction: Hammer.DIRECTION_HORIZONTAL,
      threshold: 10,
      velocity: 0.3,
    },
  };
}

@NgModule({
  declarations: [
    AppComponent,
    ProfileListComponent,
    ProfileCardComponent,
    DailyRecommendationsComponent,
    PendingProfilesComponent,
    PendingProfileListComponent,
  ],
  bootstrap: [AppComponent],
  providers: [{ provide: HAMMER_GESTURE_CONFIG, useClass: MyHammerConfig }],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    HammerModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatIconModule,
    MatSnackBarModule,
    MatTabsModule,
    NoopAnimationsModule,
    BrowserAnimationsModule
  ],
})
export class AppModule {}
