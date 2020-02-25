import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public appPages = [
    {
      title: 'Menu',
      url: '/home',
      icon: 'home'
    },

    {
      title: 'Perfil do Jogador',
      url: '/perfil',
      icon:'person'
    },
    {
      title: ' Buscar Jogadores',
      url: '/buscarjogadores',
      icon:'person-add'
    },

    {
      title: 'Comunidade',
      url:'/comunidade',
      icon:'globe'
    },

    {
      title: 'Chat',
      url:'/chat',
      icon:'chatboxes'
    },
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
