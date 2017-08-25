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
  items: Array<{title: string, icon: string, image: string}>;
  names: string[];
  images: string[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

    // Let's populate this page with some filler content for funzies
    this.icons = ['basketball', 'musical-notes', 'brush', 'baseball', 'microphone'];
    this.names = ['BMO Bradley Center', 'Summerfest', 'Art Museum', 'Miller Park', 'The Rave'];
    this.images = ['assets/Images/BMO.jpg',
                    'assets/Images/summerfest.png',
                    'assets/Images/ArtMuseum.jpg',
                    'assets/Images/MillerPark.jpg',
                    'assets/Images/TheRave.jpg'];

    this.items = [];
    for (let i = 0; i < 5; i++) {
      this.items.push({
        title: this.names[i],
        icon: this.icons[i],
        image: this.images[i]
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
