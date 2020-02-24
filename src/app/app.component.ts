import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
	selector: "app-root",
	templateUrl: "app.component.html",
	styleUrls: ["app.component.scss"]
})
export class AppComponent {
	public selectedIndex = 0;
	public appPages = [
		{
			title: "أخبار",
			url: "/news",
			icon: "../assets/sidemenu/icons/news.svg"
		},
		{
			title: "شكاوي و مقترحات",
			url: "/#",
			icon: "../assets/sidemenu/icons/complaints.svg"
		},
		{
			title: "الفعاليات",
			url: "/#",
			icon: "../assets/sidemenu/icons/events.svg"
		},
		{
			title: "مشاريع",
			url: "/#",
			icon: "../assets/sidemenu/icons/projects.svg"
		},

		{
			title: "أعضاء المجلس",
			url: "/#",
			icon: "../assets/sidemenu/icons/members.svg"
		},
		{
			title: "الإستطلاعات",
			url: "/#",
			icon: "../assets/sidemenu/icons/survey.svg"
		},
		{
			title: "معلومات عنا",
			url: "/#",
			icon: "../assets/sidemenu/icons/about.svg"
		}
	];

	constructor(
		private platform: Platform,
		private splashScreen: SplashScreen,
		private statusBar: StatusBar
	) {
		this.initializeApp();
	}

	initializeApp() {
		this.platform.ready().then(() => {
			this.statusBar.styleDefault();
			this.splashScreen.hide();
		});
	}
}
