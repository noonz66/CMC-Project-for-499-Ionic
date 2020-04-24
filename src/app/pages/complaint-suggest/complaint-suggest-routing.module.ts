import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComplaintSuggestPage } from './complaint-suggest.page';

const routes: Routes = [
  {
    path: '',
    component: ComplaintSuggestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComplaintSuggestPageRoutingModule {}
