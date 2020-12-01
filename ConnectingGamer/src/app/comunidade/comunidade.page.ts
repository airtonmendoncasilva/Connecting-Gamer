import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '../../../node_modules/@ionic/angular';


@Component({
  selector: 'app-comunidade',
  templateUrl: './comunidade.page.html',
  styleUrls: ['./comunidade.page.scss'],
})
export class ComunidadePage implements OnInit {

  constructor(private navCtrl: NavController, private alertCtrl:AlertController) { }

  ngOnInit() {
  }
  
  async abrirAlertSimples(){
    let alertSimples = await this.alertCtrl.create({
      header : 'Olá Está com dúvida?',
      message : 'Esta tela é sobre as comunidades que você pode participar no nosso aplicativo. Espero ter te ajudado :).',
      buttons : ['OK']
    });

    await alertSimples.present();
  }
  abrirPagina(nomeDaPagina : string){
    this.navCtrl.navigateForward(nomeDaPagina);
  }

}
