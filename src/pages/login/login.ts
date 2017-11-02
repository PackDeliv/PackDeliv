import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UsuarioProvider } from "../../providers/usuario/usuario";

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

  public cadastroPage = CadastroPage;
  private usuarioDAO: UsuarioProvider;

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
    let nomeUsuario = (<HTMLInputElement>document.getElementById('inputNomeUsuario')).value;
    let senha = (<HTMLInputElement>document.getElementById('inputSenha')).value;

    // Faz a requisição à API e retorna os dados para o objeto usuario
    var usuario = this.usuarioDAO.getUsuario({
      nomeUsuario: nomeUsuario,
      senha: senha
    });

    this.navCtrl.push(HomePage, usuario);
  }

  ionViewDidLoad() {
    
  }

}
