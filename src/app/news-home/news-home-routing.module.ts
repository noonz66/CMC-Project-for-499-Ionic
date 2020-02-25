import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewsHomePage } from './news-home.page';

const routes: Routes = [
  {
    path: '',
    component: NewsHomePage
  },
  {
    path: 'news-page',
    loadChildren: () => import('../newsHome/news-page/news-page.module').then( m => m.NewsPagePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewsHomePageRoutingModule {}
