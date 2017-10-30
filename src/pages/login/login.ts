import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { CadastroPage } from "../cadastro/cadastro";
import { HomePage } from "../home/home";
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
  public cadastroPage = CadastroPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  /**
   * Compara as credenciais fornecidas com as credenciais
   * do banco de dados através da API RESTful, redireciona
   * o usuário para a página Home.
   * 
   * Feito por: Matheus Campos da Silva, 30/10/2017
   */
  public fazerLogin(): void {
    // Pega as credenciais do usuário
    let nomeUsuario = (<HTMLInputElement>document.getElementById('inputNomeUsuario'));
    let senha = (<HTMLInputElement>document.getElementById('inputSenha'));

    // Implementar a requisição à API aqui

    // Dados do usuario a ser logado
    var usuario = {
      nomeCompleto: 'Matheus Campos da Silva',
    };

    this.navCtrl.push(HomePage, usuario);
  }

  ionViewDidLoad() {
    
  }

}
