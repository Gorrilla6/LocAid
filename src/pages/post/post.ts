import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';
import { AngularFire } from 'angularfire2';
import { HomePage } from '../home/home';

class Post{
  title: string
  body: string
  id: string

  constructor(){
  }
}

@Component({
  selector: 'page-post',
  templateUrl: 'post.html'
})
export class PostPage {
post: Post = new Post()
 constructor(public navCtrl: NavController, public af: AngularFire) {}

  submit(){
    this.af.database.list('/posts').push(this.post)
    this.post = new Post()
    this.navCtrl.setRoot(HomePage)

  }

  return(){
    this.navCtrl.setRoot(HomePage)
  }


}
