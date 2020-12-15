import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '../../../node_modules/@ionic/angular';


@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  constructor(private navCtrl: NavController, private alertCtrl: AlertController) { }

  ngOnInit() {
  }

  abrirPagina(nomeDaPagina: string) {
    this.navCtrl.navigateForward(nomeDaPagina);
  }
  async abrirAlertSimples() {
    let alertSimples = await this.alertCtrl.create({
      header: 'Olá Está com dúvida?',
      message: 'Esta tela é sobre as informações do perfil. Espero ter te ajudado :).',
      buttons: ['OK']
    });
    await alertSimples.present();

  }
}
