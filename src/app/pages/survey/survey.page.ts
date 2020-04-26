import { Component, OnInit } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.page.html',
  styleUrls: ['./survey.page.scss'],
})
export class SurveyPage implements OnInit {

  constructor(private iab: InAppBrowser) { }

  ngOnInit() {
  }

  openSurvey() {
    this.iab.create(
      "https://docs.google.com/forms/d/e/1FAIpQLSeq2zzmddU-qgi0McUKGpV-sZ_GGyeVIuCDbecwOaCmk6bLjA/viewform?usp=sf_link",
      "_self",
      "toolbarposition=top,presentationstyle=fullscreen,toolbar=yes,toolbarcolor=#AC3236,navigationbuttoncolor=#ffffff,enableViewportScale=yes,hideurlbar=yes,closebuttoncaption=أغلق,closebuttoncolor=#ffffff,footer=no,footercolor=#AC3236,fullscreen=yes,location=yes,keyboardDisplayRequiresUserAction=yes,mediaPlaybackRequiresUserAction=yes,lefttoright=yes,shouldPauseOnSuspend=yes"
    );
  }

}
