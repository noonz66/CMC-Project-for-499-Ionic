import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComplaintSuggestPageRoutingModule } from './complaint-suggest-routing.module';

import { ComplaintSuggestPage } from './complaint-suggest.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComplaintSuggestPageRoutingModule
  ],
  declarations: [ComplaintSuggestPage]
})
export class ComplaintSuggestPageModule {}
