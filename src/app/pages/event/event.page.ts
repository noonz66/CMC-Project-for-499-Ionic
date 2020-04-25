import { Component, OnInit } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-event',
  templateUrl: './event.page.html',
  styleUrls: ['./event.page.scss'],
})
export class EventPage implements OnInit {

  constructor(private iab: InAppBrowser) { }

  ngOnInit() {
  }

  openEvent() {
    this.iab.create(
      "https://www.eventbrite.com.au/e/a-social-democratic-future-the-case-for-government-tickets-102747181586?aff=ebdssbonlinesearch",
      "_self",
      "toolbarposition=top,presentationstyle=fullscreen,toolbar=yes,toolbarcolor=#AC3236,navigationbuttoncolor=#ffffff,enableViewportScale=yes,hideurlbar=yes,closebuttoncaption=أغلق,closebuttoncolor=#ffffff,footer=no,footercolor=#AC3236,fullscreen=yes,location=yes,keyboardDisplayRequiresUserAction=yes,mediaPlaybackRequiresUserAction=yes,lefttoright=yes,shouldPauseOnSuspend=yes"
    );
  }

}
