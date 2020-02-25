import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { BuscarjogadoresPage } from './buscarjogadores.page';

const routes: Routes = [
  {
    path: '',
    component: BuscarjogadoresPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [BuscarjogadoresPage]
})
export class BuscarjogadoresPageModule {}
