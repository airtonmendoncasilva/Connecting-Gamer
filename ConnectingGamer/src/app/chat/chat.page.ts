import { Component, OnInit } from '@angular/core';
import { NavController } from '../../../node_modules/@ionic/angular';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  abrirPagina(nomeDaPagina : string){
    this.navCtrl.navigateForward(nomeDaPagina);
  }

}
