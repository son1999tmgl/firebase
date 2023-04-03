import { Component } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Random } from 'random'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'firebase-app';
  items: any;

  constructor(db: AngularFireDatabase) {
    db.object('/user').valueChanges().subscribe(data => {
      console.log(JSON.stringify(data));
    });

    //push
    const u = {
      name: "teo",
      age: 3
    }
    // db.list("user").push(u)


    // update
    db.object("user/-NS4wKjtxjI-yAxLg2w6").update({age: 10, name: 19})


    //remove
    db.object("user/-NS4wKjtxjI-yAxLg2w6").remove()

    //get
    console.log(db.list('user'))
    console.log(db.object('user/2'),'-----------');
    
  }

}
