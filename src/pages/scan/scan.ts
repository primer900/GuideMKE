import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {BarcodeData} from "../../app/Models/BarcodeData";

/**
 * Generated class for the ScanPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-scan',
  templateUrl: 'scan.html',
})
export class ScanPage {

  barCodeData: String;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.barCodeData = navParams.get('details');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ScanPage');
  }
}
