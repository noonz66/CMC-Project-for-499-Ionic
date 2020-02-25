import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CouncilMembersPage } from './council-members.page';

const routes: Routes = [
  {
    path: '',
    component: CouncilMembersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CouncilMembersPageRoutingModule {}
