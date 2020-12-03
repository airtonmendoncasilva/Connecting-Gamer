import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { LoadingController, NavController } from '../../../node_modules/@ionic/angular';


@Component({
  selector: 'app-buscarjogadores',
  templateUrl: './buscarjogadores.page.html',
  styleUrls: ['./buscarjogadores.page.scss'],
})
export class BuscarjogadoresPage implements OnInit {
users =[];
page =0;
maximumPages = 3;

  constructor(private navCtrl: NavController, private loadingCtrl : LoadingController, private http: HttpClient) {
    this.loadUsers();
   }

  ngOnInit() {
  }
  async showLoadingDefault(){
    let loading = await this.loadingCtrl.create({
      message:'Buscando Jogadores...',
      duration: 2000
    });

    return await loading.present();
  }
  abrirPagina(nomeDaPagina: string) {
    this.navCtrl.navigateForward(nomeDaPagina);
  }
  
  loadUsers(event?){
    this.http.get('https://randomuser.me/api/?results=20&page=$(this.page)')
    .subscribe(res =>{
      console.log(res);
      this.users = this.users.concat(res['results']);

      if (event){
        event.target.complete();
      }
    })
  }

  loadMore(event){
    console.log(event);
    this.page++;
    this.loadUsers(event);

    if(this.page === this.maximumPages){
      event.target.disabled = true;
    }
  }
 
}
