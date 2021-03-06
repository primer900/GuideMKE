import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {SitePage} from "../site/site";

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  selectedItem: any;
  icons: string[];
  longitudes: number[];
  latitudes: number[];
  items: Array<{title: string, icon: string, image: string, infoUrl: string, longitude: number, latitude: number}>;
  names: string[];
  images: string[];
  infoUrl: string[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

    // Let's populate this page with some filler content for funzies
    this.icons = ['basketball',
                  'musical-notes',
                  'brush',
                  'baseball',
                  'microphone'];
    this.names = ['BMO Bradley Center',
                  'Summerfest',
                  'Art Museum',
                  'Miller Park',
                  'The Rave'];
    this.images = ['assets/Images/BMO.jpg',
                    'assets/Images/summerfest.png',
                    'assets/Images/ArtMuseum.jpg',
                    'assets/Images/MillerPark.jpg',
                    'assets/Images/TheRave.jpg'];
    this.infoUrl = ['https://www.bmoharrisbradleycenter.com/',
                    'https://summerfest.com/',
                    'https://mam.org/',
                    'http://milwaukee.brewers.mlb.com/mil/ballpark/',
                    'https://www.therave.com/main.asp'];
    this.longitudes = [
      -87.9172,
      -87.9065,
      -87.897438,
      -87.9713,
      -87.9429
    ];
    this.latitudes = [
      43.0436,
      43.0389,
      43.0401,
      43.0282,
      43.0381
    ];


    this.items = [];
    for (let i = 0; i < 5; i++) {
      this.items.push({
        title: this.names[i],
        icon: this.icons[i],
        image: this.images[i],
        infoUrl: this.infoUrl[i],
        longitude: this.longitudes[i],
        latitude: this.latitudes[i]
      });
    }
  }

  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(SitePage, {
      item: item
    });
  }
}
