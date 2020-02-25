import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AboutsUsPageRoutingModule } from './abouts-us-routing.module';

import { AboutsUsPage } from './abouts-us.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AboutsUsPageRoutingModule
  ],
  declarations: [AboutsUsPage]
})
export class AboutsUsPageModule {}
