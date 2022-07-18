import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

/*
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAhIrWLUeuv_lsBegyBTl5mXHRlUEgKQVc",
  authDomain: "final-app-722c6.firebaseapp.com",
  databaseURL: "https://final-app-722c6-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "final-app-722c6",
  storageBucket: "final-app-722c6.appspot.com",
  messagingSenderId: "75990280493",
  appId: "1:75990280493:web:7589ac01c0da07f5428ba4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
*/
