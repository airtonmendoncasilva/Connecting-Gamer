import { Component, OnInit } from '@angular/core';
import { NavController } from '../../../node_modules/@ionic/angular';

@Component({
  selector: 'app-buscarjogadores',
  templateUrl: './buscarjogadores.page.html',
  styleUrls: ['./buscarjogadores.page.scss'],
})
export class BuscarjogadoresPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  abrirPagina(nomeDaPagina : string){
    this.navCtrl.navigateForward(nomeDaPagina);
  }
  

}
