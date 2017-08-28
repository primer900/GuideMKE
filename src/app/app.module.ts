import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {SitePage} from "../pages/site/site";
import {NewsPage} from "../pages/news/news";
import {FeedComponent} from "./feed-component/feed.component";

import {IonicStorageModule} from "@ionic/storage";
import {FeedProvider} from "../providers/feed/feed";
import {HttpModule} from "@angular/http";
import {InAppBrowser} from "@ionic-native/in-app-browser";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    SitePage,
    NewsPage,
    FeedComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicStorageModule.forRoot(),
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    SitePage,
    NewsPage,
    FeedComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FeedProvider,
    InAppBrowser
  ]
})
export class AppModule {}
