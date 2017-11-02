import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UsuarioProvider } from "../../providers/usuario/usuario";

import { LoginPage } from "../login/login";

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
  
  private usuarioDAO: UsuarioProvider;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  /**
   * Realiza o cadastro do usuário inserindo as informações
   * no banco de dados.
   * 
   * Feito por: Matheus Campos da Silva, 30/10/2017
   */
  public fazerCadastro(): void {
    // Pega as informações do usuário
    let nomeUsuario = (<HTMLInputElement>document.getElementById('inputNomeUsuario')).value;
    let cnpj = (<HTMLInputElement>document.getElementById('inputCNPJ')).value;
    let senha = (<HTMLInputElement>document.getElementsByClassName('inputSenha')[0]);
    let SenhaConf = (<HTMLInputElement>document.getElementsByClassName('inputSenha')[1]);

    // Compara se as senhas digitadas são correspondentes
    if (senha.value !== SenhaConf.value) {
      // Faz algo caso não sejam
      senha.innerText = '';
      SenhaConf.innerText = '';
      senha.focus();
      alert('As senhas não são correspondentes.')
      return;
    }

    // Pega o e-mail do usuário
    let email = (<HTMLInputElement>document.getElementsByClassName('inputEmail')[0]);
    let emailConf = (<HTMLInputElement>document.getElementsByClassName('inputEmail')[1]);

    // Compara se os e-mails digitados são correspondentes
    if (email.value !== emailConf.value) {
      // Faz algo caso não sejam
      email.innerText = '';
      emailConf.innerText = '';
      email.focus();
      alert('E-mails não são correspondentes.');
      return;
    }

    // Cria o objeto usuario e o cadastro no BD
    var usuario = {
      nomeCompleto: nomeUsuario,
      cnpj: cnpj,
      senha: senha.value,
      email: email.value
    };
    this.usuarioDAO.cadastrar(usuario);

    this.navCtrl.push(LoginPage);
  }

  ionViewDidLoad() {
    
  }

}
