import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CadastroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cadastro',
  templateUrl: 'cadastro.html',
})
export class CadastroPage {

  private request: XMLHttpRequest;
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  public fazerCadastro(): void {
    let nomeUsuario = (<HTMLInputElement>document.getElementById('inputNomeUsuario')).value;
    let senha = (<HTMLInputElement>document.getElementsByClassName('inputSenha')[0]);
    let SenhaConf = (<HTMLInputElement>document.getElementsByClassName('inputSenha')[1]);

    if (senha.value !== SenhaConf.value) {
      senha.focus();
      alert('As senhas não correspondem.');
      return;
    }

    let email = (<HTMLInputElement>document.getElementsByClassName('inputEmail')[0]);
    let emailConf = (<HTMLInputElement>document.getElementsByClassName('inputEmail')[1]);

    if (email.value !== emailConf.value) {
      email.focus();
      alert('Os e-mails não correspondem.');
      return;
    }

    this.request = new XMLHttpRequest();
    this.request.onreadystatechange == function () {
      if (this.request.readyState == 4 && this.request.status == 200) {

      }
    }
    let args = '?username=' + nomeUsuario + '&passwd=' + senha + '&email=' + email;
    this.request.open('POST', 'http://localhost/user/api/v1.0' + args, true);
    this.request.send(null);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastroPage');
  }

}
