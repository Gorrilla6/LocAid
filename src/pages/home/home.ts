import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { AuthService } from '../../providers/auth-service';
import { LogInPage } from '../user-log-in/user-log-in';
import { PostPage } from '../post/post';
import firebase from 'firebase';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
    posts: FirebaseListObservable<any>
//User account


 constructor(public navCtrl: NavController, public auth: AuthService, public af: AngularFire) {
   this.posts =  af.database.list('/posts');

   firebase.auth().onAuthStateChanged(function(user){
     if (!user){
       navCtrl.setRoot(LogInPage);
     }
   });

}

public newPost(Page) {
  this.navCtrl.setRoot(PostPage)
}
}
