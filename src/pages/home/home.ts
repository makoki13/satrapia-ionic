import { Component, ViewChild } from '@angular/core';
import { NavController, Nav } from 'ionic-angular';

import { Storage } from '@ionic/storage';

import { LoginPage } from '../login/login';
import { NuevoPage } from './nuevo/nuevo';
import { FastPage } from './fast/fast';
import { PersistentePage} from './persistente/persistente';
import { ConfigPage } from './config/config';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild(Nav) nav: Nav;

  //rootPage: any = HomePage;
  pages: Array<{title: string, component: any}>

  constructor(public navCtrl: NavController, private storage: Storage) {
    console.log("home");
    this.storage.set('inicio','home');

    this.pages = [
      { title: 'Test', component: NuevoPage },
      { title: 'Nuevo', component: NuevoPage },
      { title: 'Rápido', component: FastPage },
      { title: 'Persistente', component: PersistentePage },
      { title: 'Config', component: ConfigPage },
    ];
  }

  clickMenu() {
    console.log ("se abre menú");
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  finSesion() {
    this.navCtrl.push( LoginPage );
  }

}
