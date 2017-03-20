import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { PostPage } from '../pages/post/post';
import { GroupsPage } from '../pages/user-groups/user-groups';
import { InfoPage } from '../pages/user-info/user-info';
import { Data } from '../providers/data';
import { AngularFireModule } from 'angularfire2';
import { ConnectionComponent } from '../components/connection/connection';
const config = {
    apiKey: "AIzaSyCNU0gwrKWQfBdkyB4EQ2XVMcgUGRYK6DA",
    authDomain: "locaid-d886e.firebaseapp.com",
    databaseURL: "https://locaid-d886e.firebaseio.com",
    storageBucket: "locaid-d886e.appspot.com",
    messagingSenderId: "247681433628"
  };

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    PostPage,
    GroupsPage,
    ConnectionComponent,
    InfoPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(config)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    PostPage,
    GroupsPage,
    InfoPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, Data]
})
export class AppModule {}
