import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutsUsPage } from './abouts-us.page';

const routes: Routes = [
  {
    path: '',
    component: AboutsUsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AboutsUsPageRoutingModule {}
