import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SitePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-site',
  templateUrl: 'site.html',
})
export class SitePage {
  item: any;
  imageUrl: string;
  infoUrl: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
      this.item = navParams.get('item');
      this.imageUrl = this.item.image;
      this.infoUrl = this.item.infoUrl;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SitePage');
  }

}
