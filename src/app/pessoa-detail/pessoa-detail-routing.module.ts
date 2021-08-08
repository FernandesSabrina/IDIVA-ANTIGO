import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PessoaDetailPage } from './pessoa-detail.page';

const routes: Routes = [
  {
    path: '',
    component: PessoaDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PessoaDetailPageRoutingModule {}
