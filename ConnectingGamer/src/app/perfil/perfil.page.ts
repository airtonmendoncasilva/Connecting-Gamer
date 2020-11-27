import { Component, OnInit } from '@angular/core';
import { NavController } from '../../../node_modules/@ionic/angular';


@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {   
  }
 
  abrirPagina(nomeDaPagina : string){
    this.navCtrl.navigateForward(nomeDaPagina);
  }
  

}
