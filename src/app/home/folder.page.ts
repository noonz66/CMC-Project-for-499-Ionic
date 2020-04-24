import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InAppBrowser } from "@ionic-native/in-app-browser/ngx";


@Component({
	selector: "app-folder",
	templateUrl: "./folder.page.html",
	styleUrls: ["./folder.page.scss"],
})
export class FolderPage implements OnInit {
	public folder: string;

	constructor(
		private activatedRoute: ActivatedRoute,
		private iab: InAppBrowser
	) {}

	openTawasul(){
    this.iab.create(
			"https://services.bahrain.bh/wps/portal/tawasul/",
			"_self",
			"toolbarposition=top,presentationstyle=fullscreen,toolbar=yes,toolbarcolor=#AC3236,navigationbuttoncolor=#ffffff,enableViewportScale=yes,hideurlbar=yes,closebuttoncaption=أغلق,closebuttoncolor=#ffffff,footer=no,footercolor=#AC3236,fullscreen=yes,location=yes,keyboardDisplayRequiresUserAction=yes,mediaPlaybackRequiresUserAction=yes,lefttoright=yes,shouldPauseOnSuspend=yes"
		);
  }

	ngOnInit() {
		this.folder = this.activatedRoute.snapshot.paramMap.get("id");
	}
}
