import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
//import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

//import { Plugins } from '@capacitor/core';
//const { SplashScreen } = Plugins;

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
			url: "/news-home",
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
			url: "/projects",
			icon: "../assets/sidemenu/icons/projects.svg"
		},

		{
			title: "أعضاء المجلس",
			url: "/pages/council-members",
			icon: "../assets/sidemenu/icons/members.svg"
		},
		{
			title: "الإستطلاعات",
			url: "/#",
			icon: "../assets/sidemenu/icons/survey.svg"
		},
		{
			title: "معلومات عنا",
			url: "/pages/abouts-us",
			icon: "../assets/sidemenu/icons/about.svg"
		}
	];

	constructor(
		private platform: Platform,
		private statusBar: StatusBar
	) {
		this.initializeApp();
	}

	initializeApp() {
		this.platform.ready().then(() => {
			this.statusBar.styleDefault();
			//SplashScreen.hide();
			
		});
	}
}
