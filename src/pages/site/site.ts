import {Component, ElementRef, ViewChild} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SitePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

declare var google;

@IonicPage()
@Component({
  selector: 'page-site',
  templateUrl: 'site.html',
})
export class SitePage {
  item: any;
  imageUrl: string;
  infoUrl: string;
  longitude: number;
  latitude: number;

  @ViewChild('map') mapElement: ElementRef;
  map: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
      this.item = navParams.get('item');
      this.imageUrl = this.item.image;
      this.infoUrl = this.item.infoUrl;
      this.longitude = this.item.longitude;
      this.latitude = this.item.latitude;
  }

  InitMap() {
    let latLng = new google.maps.LatLng(this.latitude, this.longitude);

    let mapOptions = {
      center: latLng,
      zoom: 17,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }

    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SitePage');
    this.InitMap();
  }

}
