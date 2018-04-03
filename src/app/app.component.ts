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

      //this.storage.remove('usuario3');this.storage.remove('usuario4');this.storage.remove('usuario5');
      //this.storage.remove('inicio');this.storage.remove('num-usuarios');this.storage.remove('sesion-usuario');

      this.storage.get('sesion-usuario').then((val) => {
        console.log('sesion-usuario',val);
        if ( (!val) || (val.trim() === '') )  {
          console.log('NO hay sesion-usuario');
        }
        else {
          console.log('SI hay sesion-usuario');
          this.rootPage = HomePage;
        }
      });

      this.storage.get('inicio').then((val) => {
        console.log('inicio:',val);

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
          this.rootPage = RegistroPage;
        }

        //this.rootPage = HomePage; // Quitar despues de pruebas
      })
      .catch( (val) => {
        console.log('catch',val);
        this.rootPage = RegistroPage; // Quitar despues de pruebas
      })  ;

      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

