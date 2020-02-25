import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CouncilMembersPageRoutingModule } from './council-members-routing.module';

import { CouncilMembersPage } from './council-members.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CouncilMembersPageRoutingModule
  ],
  declarations: [CouncilMembersPage]
})
export class CouncilMembersPageModule {}
