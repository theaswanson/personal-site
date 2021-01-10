import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

const ROUTES = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: '**', redirectTo: '' }
] as Routes;

const ROUTER_OPTIONS = {
  anchorScrolling: 'enabled'
} as ExtraOptions;

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES, ROUTER_OPTIONS),
    FlexLayoutModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
