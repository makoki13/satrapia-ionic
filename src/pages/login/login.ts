import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Storage } from '@ionic/storage';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  @ViewChild('user') user;
  @ViewChild('password') password;

  private usuarioValido = false;
  private claveValida = false;

  private imagenInicial = 'alert';

  imgUser: string = this.imagenInicial;
  imgPassword: string = this.imagenInicial;

  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage) {
    this.storage.set('inicio','login');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
    setTimeout(()=>{
      this.user.setFocus();
    },200);
  }

  controlNameKeypress(event) {
    const caracter = event.keyCode;
    if (caracter === 13) {
      this.password.setFocus();
    }
  }

  controlPasswordKeypress(event) {
    const caracter = event.keyCode;
    if (caracter === 13) {
      //this.boton.setFocus();
    }
  }

  testUsuario() {
    if (this.user.value.length < 3) {
      this.imgUser = this.imagenInicial;
      this.usuarioValido = false;
    } else {
      this.imgUser = 'checkmark';
      this.usuarioValido = true;
    }
    this.verificaFormulario();
  }

  testPassword() {
    if (this.password.value.length < 8) {
      this.imgPassword = this.imagenInicial;
      this.claveValida = false;
    } else {
      this.imgPassword = 'checkmark';
      this.claveValida = true;
    }
    this.verificaFormulario();
  }

  private verificaFormulario() {
    return (this.usuarioValido && this.claveValida);
  }

  entra() {
    alert("En obras");
  }

  irAlRegistro() {
    alert("En obras");
  }

}
