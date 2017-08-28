import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { FeedProvider, Feed } from '../../providers/feed/feed';

/**
 * Generated class for the NewsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-news',
  templateUrl: 'news.html',
})
export class NewsPage {

  feeds: Feed[];

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private feedProvider: FeedProvider,
              public alertCtrl: AlertController) {
  }

  public addFeed() {
    let prompt = this.alertCtrl.create({
      title: 'Add Feed URL',
      inputs: [
        {
          name: 'name',
          placeholder: 'The best Feed ever'
        },
        {
          name: 'url',
          placeholder: 'http://www.myfeedurl.com/feed'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Save',
          handler: data => {
            let newFeed = new Feed(data.name, data.url);
            this.feedProvider.addFeed(newFeed).then(
              res => {
                this.loadFeeds();
              }
            );
          }
        }
      ]
    });
    prompt.present();
  }

  private loadFeeds() {
    this.feedProvider.getSavedFeeds().then(
      allFeeds => {
        this.feeds = allFeeds;
      });
  }

  public openFeed(feed: Feed) {
    this.navCtrl.push('FeedListPage', { 'selectedFeed': feed });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewsPage');
  }

  public ionViewWillEnter() {
    this.loadFeeds();
  }
}
