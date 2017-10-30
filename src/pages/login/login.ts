import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { CadastroPage } from "../cadastro/cadastro";
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

  private request: XMLHttpRequest;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  public fazerLogin(): void {
    let nomeUsuario = (<HTMLInputElement>document.getElementById('inputNomeUsuario'));
    let senha = (<HTMLInputElement>document.getElementById('inputSenha'));

    this.request.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        // Método aqui
      }
    }
    this.request.open('POST', 'http://localhost/user/api/v1.0/', true);
    this.request.send(null);
  }

  public redirecionarCadastro(): void {
    this.navCtrl.push(CadastroPage);
  }

  ionViewDidLoad() {
    
  }

}
