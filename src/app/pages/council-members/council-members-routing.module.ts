import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CouncilMembersPage } from './council-members.page';

const routes: Routes = [
  {
    path: '',
    component: CouncilMembersPage
  },
  {
    path: 'member-info',
    loadChildren: () => import('./member-info/member-info.module').then( m => m.MemberInfoPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CouncilMembersPageRoutingModule {}
