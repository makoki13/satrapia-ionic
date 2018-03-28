import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { Storage } from '@ionic/storage';

import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { RegistroPage } from '../pages/registro/registro';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private storage: Storage) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.

      this.storage.get('inicio').then((val) => {
        console.log(val);
        /*
        if (val === 'home') {
          this.rootPage = HomePage;
        }
        else if (val === 'login') {
          this.rootPage = LoginPage;
        }
        else if (val === '') {
          this.rootPage = RegistroPage;
        }
        else {
          this.rootPage = LoginPage;
        }
        */
      });

      this.rootPage = HomePage; // Quitar despues de pruebas

      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

