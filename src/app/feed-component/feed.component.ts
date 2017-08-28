import {Component} from '@angular/core';

@Component ({
  selector: 'feed',
  template: `<div class="feed-component">
    <img src="https://audacitus.com/site/wp-content/uploads/2017/01/feed-img-3.jpg">
  </div>`,
  styles: [`
    .feed-component {
      position: relative;
    }

    .feed-component img {
      display: block;
    }

    .feed-component:before {
      position: absolute;
      width: 100%;
      height: 100%; min-height: 100%;
      background: rgba(67,67,67,0.4);
      content: ''
    }
    .feed-component .feed-title {
      position: absolute;
      bottom: 15px;
      padding: 0 20px;
      color: white;
    }
    .feed-component .feed-category {
      -webkit-transform: rotate(-90deg);
      -moz-transform: rotate(-90deg);
      -o-transform: rotate(-90deg);
      -ms-transform: rotate(-90deg);
      transform: rotate(-90deg);
      position: absolute;
      top: 45%;
      width: 100%;
      left: -45%;
      color: white;
      text-transform: uppercase;
      text-align: right;
      padding-right: 10px;
      padding-top: 20px;
      letter-spacing: 5px;
    }
    `]
})

export class FeedComponent {

}
