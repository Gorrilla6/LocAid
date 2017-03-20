import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { GroupsPage } from '../pages/user-groups/user-groups';
import { TabsPage } from '../pages/tabs/tabs';
import { HomePage } from '../pages/home/home';
import { PostPage } from '../pages/post/post';
import { InfoPage } from '../pages/user-info/user-info';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage = TabsPage;
  @ViewChild(Nav) nav: Nav;

  constructor(platform: Platform) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }
  go_to_broadcasts(Page){
  this.nav.setRoot(HomePage);
  }

  go_to_userInfo(Page){
  this.nav.setRoot(InfoPage)
  }

  go_to_group(Page){
    this.nav.setRoot(GroupsPage)

  }
}
