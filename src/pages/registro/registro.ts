import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Component, ViewChild } from '@angular/core';


/**
 * Generated class for the RegistroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registro',
  templateUrl: 'registro.html',
})
export class RegistroPage {

  @ViewChild('nombre') nombre;
  @ViewChild('email') email;
  @ViewChild('username') username;
  @ViewChild('password') password;
  @ViewChild('passwordConfirmado') passwordConfirmado;
  @ViewChild('boton') boton;

  private nombreValido = false;
  private correoValido = false;
  private jugadorValido = false;
  private claveValida = false;
  private claveConfirmadaValida = false;

  private imagenInicial = 'alert';

  imgNombre: string = this.imagenInicial;
  imgEmail: string = this.imagenInicial;
  imgUsername: string = this.imagenInicial;
  imgPassword: string = this.imagenInicial;
  imgPasswordConfirmado: string = this.imagenInicial;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    setTimeout(()=>{
      this.nombre.setFocus();
    },200);

    console.log('ionViewDidLoad RegistroPage');
  }

  ngOnInit() {

    //this.nombre.setFocus();
    console.log('imagen',this.imgNombre);
  }

  registra() {
   alert("En obras");
  }

  controlNameKeypress(event) {
    const caracter = event.keyCode;
    if (caracter === 13) {
      this.email.setFocus();
    }
  }

  controlEmailKeypress(event) {
    const caracter = event.keyCode;
    if (caracter === 13) {
      this.username.setFocus();
    }
  }

  controlUsernameKeypress(event) {
    const caracter = event.keyCode;
    if (caracter === 13) {
      this.password.setFocus();
    }
  }

  controlPasswordKeypress(event) {
    const caracter = event.keyCode;
    if (caracter === 13) {
      this.passwordConfirmado.setFocus();
    }
  }

  controlPasswordConfirmadoKeypress(event) {
    const caracter = event.keyCode;
    if (caracter === 13) {
      //this.boton.setFocus();
    }
  }

  testNombre() {
    if (this.nombre.value.length < 3) {
      this.imgNombre = this.imagenInicial;
      this.nombreValido = false;
    } else {
      this.imgNombre = 'checkmark';
      this.nombreValido = true;
    }
    this.verificaFormulario();
  }

  validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  testEmail() {
    if (this.validateEmail(this.email.value) === false) {
      this.imgEmail = this.imagenInicial;
      this.correoValido = false;
    } else {
      this.imgEmail = 'checkmark';
      this.correoValido = true;
    }
    this.verificaFormulario();
  }

  testUsername() {
    if (this.username.value.length < 3) {
      this.imgUsername = this.imagenInicial;
      this.jugadorValido = false;
    } else {
      this.imgUsername = 'checkmark';
      this.jugadorValido = true;
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

  testPasswordConfirmado() {
    if (this.passwordConfirmado.value.trim() !== this.password.value.trim()) {
      this.imgPasswordConfirmado = this.imagenInicial;
      this.claveConfirmadaValida = false;
    } else {
      this.imgPasswordConfirmado = 'checkmark';
      this.claveConfirmadaValida = true;
    }
    this.verificaFormulario();
  }

  private verificaFormulario() {
    return (this.nombreValido && this.correoValido && this.jugadorValido && this.claveValida &&
      this.claveConfirmadaValida);
  }

}
