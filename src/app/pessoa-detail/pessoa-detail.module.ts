import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PessoaDetailPageRoutingModule } from './pessoa-detail-routing.module';

import { PessoaDetailPage } from './pessoa-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PessoaDetailPageRoutingModule
  ],
  declarations: [PessoaDetailPage]
})
export class PessoaDetailPageModule {}
