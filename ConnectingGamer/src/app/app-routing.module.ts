import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },

  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },

  {
    path: '',
    redirectTo:'home',
    pathMatch:'full',
  },
  {
    path:'',
    redirectTo:'home',
    pathMatch:'full',
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },

  {
    path:'perfil',
    loadChildren:() => import('./perfil/perfil.module').then(m => m.PerfilPageModule)
  },
 
  {
    path:'buscarjogadores',
    loadChildren:() => import('./buscarjogadores/buscarjogadores.module').then(m =>m.BuscarjogadoresPageModule)
  },
  { path: 'comunidade', 
    loadChildren: () => import('./comunidade/comunidade.module').then(m =>m.ComunidadePageModule )
  },
  { path: 'chat', 
    loadChildren: () => import('./chat/chat.module').then(m =>m.ChatPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
