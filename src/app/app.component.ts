import { Component } from '@angular/core';

//Import de la class Post contenue dans le dossier entities partie bonus
import { Post } from '../entities/post';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent
{

  constructor(){

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyB_JEtDEtJO1AOtoJUt6GdBcJlpRYIi39k",
    authDomain: "angularbooks-80aa3.firebaseapp.com",
    databaseURL: "https://angularbooks-80aa3.firebaseio.com/",projectId: "angularbooks-80aa3",
    storageBucket: "",
    messagingSenderId: "897897804740",
    appId: "1:897897804740:web:b12ebfe952b1e02b18aa91"
  };
  firebase.initializeApp(config);
  }

}
