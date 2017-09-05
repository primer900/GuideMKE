import { Component } from '@angular/core';
import { Platform, NavController } from 'ionic-angular';
import{BarcodeScanner} from 'ionic-native';
import {BarcodeData} from "../../app/Models/BarcodeData";
import {ScanPage} from "../scan/scan";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public platform: Platform, public navCtrl: NavController) {
  this.platform = platform;
  }

  scan(){
    BarcodeScanner.scan()
      .then((result) => {
        if(!result.cancelled){
          const barcodeData = new BarcodeData(result.text, result.format);
          this.scanDetails(barcodeData);
        }
      })
      .catch((err) => {
      alert(err);
      })
  }

  scanDetails(details) {
    this.navCtrl.push(ScanPage, {details: details.text});
  }
}
