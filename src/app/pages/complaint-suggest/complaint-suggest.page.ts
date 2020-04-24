import { Component, OnInit } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-complaint-suggest',
  templateUrl: './complaint-suggest.page.html',
  styleUrls: ['./complaint-suggest.page.scss'],
})
export class ComplaintSuggestPage implements OnInit {

  constructor(private iab: InAppBrowser, public navCtrl: NavController) { }

  ngOnInit() {
   this.iab.create(
      "https://services.bahrain.bh/wps/portal/tawasul/",
      "_self",
      "toolbarposition=top,presentationstyle=fullscreen,toolbar=yes,toolbarcolor=#AC3236,navigationbuttoncolor=#ffffff,enableViewportScale=yes,hideurlbar=yes,closebuttoncaption=أغلق,closebuttoncolor=#ffffff,footer=no,footercolor=#AC3236,fullscreen=yes,location=yes,keyboardDisplayRequiresUserAction=yes,mediaPlaybackRequiresUserAction=yes,lefttoright=yes,shouldPauseOnSuspend=yes"
    );
  }

  ionViewWillEnter() {
    this.navCtrl.navigateRoot("/home")
  }
  }
