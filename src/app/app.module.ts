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
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';
import { ConnectionComponent } from '../components/connection/connection';
import { LogInPage } from '../pages/user-log-in/user-log-in';
import { SignUpPage } from '../pages/user-sign-up/user-sign-up';
import { AuthService } from '../providers/auth-service';
import { ResetpwdPage} from '../pages/resetpwd/resetpwd';
import firebase from 'firebase';

/*Firebase connection*/
const firebaseConfig = {
    apiKey: "AIzaSyCNU0gwrKWQfBdkyB4EQ2XVMcgUGRYK6DA",
    authDomain: "locaid-d886e.firebaseapp.com",
    databaseURL: "https://locaid-d886e.firebaseio.com",
    storageBucket: "locaid-d886e.appspot.com",
    messagingSenderId: "247681433628"
  };

const myFirebaseAuthConfig = {
  provider: AuthProviders.Password,
  method: AuthMethods.Password
}

firebase.initializeApp(firebaseConfig)

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
    InfoPage,
    LogInPage,
    SignUpPage,
    ResetpwdPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig, myFirebaseAuthConfig)
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
    InfoPage,
    LogInPage,
    SignUpPage,
    ResetpwdPage
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler},Data,AuthService]
})
export class AppModule {}
