import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

/*
  Generated class for the UsuarioProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UsuarioProvider {

  private url: string = 'http://localhost:3000/';

  constructor(private http: Http) {
    console.log('Hello UsuarioProvider Provider');
  }

  /**
   * Retorna um objeto usuário de acordo com suas credenciais.
   * @param credenciais 
   * Um objeto contendo o login e a senha do usuário.
   * 
   * Feito por: Matheus Campos da Silva, 02/11/2017
   */
  public getUsuario(credenciais: any) {
    this.http.get(this.url, {
      body: {
        username: credenciais.nomeUsuario,
        passwd: credenciais.senha
      }
    }).subscribe((response) => {
      var usuario = response.json();
      return usuario;
    }, (error) => {
      throw error;
    });
  }

  /**
   * Cadastrar um usuário na base de dados do sistema.
   * @param usuario 
   * Um objeto contendo todos os dados do usuário.
   * 
   * Feito por: Matheus Campos da Silva, 02/11/2017
   */
  public cadastrar(usuario: object) {
    this.http.post(this.url, usuario)
    .do(res => alert(res));
  }

}
