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
      //this.storage.remove('usuario3');this.storage.remove('usuario4');this.storage.remove('usuario5');
      //this.storage.remove('inicio');this.storage.remove('num-usuarios');this.storage.remove('sesion-usuario');

      this.storage.get('sesion-usuario').then((val) => {
        console.log('sesion-usuario',val);
        if ( (!val) || (val.trim() === '') )  {
          console.log('NO hay sesion-usuario');
          this.storage.get('num-usuarios').then((val) => {
            console.log('num-usuarios:',val);

            if ( (!val) || (val === 0) )  {
              this.rootPage = RegistroPage;
            } else {
              this.rootPage = LoginPage;
            }
          })
          .catch( (val) => {
            console.log('catch',val);
            this.rootPage = RegistroPage; // Quitar despues de pruebas
          })  ;
        }
        else {
          console.log('SI hay sesion-usuario');
          this.rootPage = HomePage;
        }

      });

      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

