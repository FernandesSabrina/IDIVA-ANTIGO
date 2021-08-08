import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomePageModule) },
  {
    path: 'add-song',
    loadChildren: () => import('./add-song/add-song.module').then(m => m.AddSongPageModule)
  },
  {
    path: 'edit-song/:id',
    loadChildren: () => import('./edit-song/edit-song.module').then(m => m.EditSongPageModule)
  },
  {
    path: 'pessoas',
    loadChildren: () => import('./cadastros/pessoas/pessoas.module').then( m => m.PessoasPageModule)
  },  {
    path: 'cadastro',
    loadChildren: () => import('./cadastro/cadastro.module').then( m => m.CadastroPageModule)
  }

 


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
