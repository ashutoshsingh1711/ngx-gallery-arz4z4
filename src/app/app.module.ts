import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { GalleryModule } from 'ng-gallery';
import { LightboxModule } from 'ng-gallery/lightbox';

@NgModule({
  exports: [MatButtonModule, MatToolbarModule],
})
export class MaterialModule {}

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    MaterialModule,
    RouterModule.forRoot([{ path: '', component: HomeComponent }]),
    BrowserAnimationsModule,
    GalleryModule.withConfig({
      // thumbView: 'contain',
    }),
    LightboxModule,
  ],
  declarations: [AppComponent, HomeComponent],
  bootstrap: [AppComponent],
  providers: [],
})
export class AppModule {}
