import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then( m => m.ListPageModule)
  },
  {
    path: 'news-home',
    loadChildren: () => import('./news-home/news-home.module').then( m => m.NewsHomePageModule)
  },
  {
    path: 'news-page',
    loadChildren: () => import('./news-page/news-page.module').then( m => m.NewsPagePageModule)
  },
  {
    path: 'project-list',
    loadChildren: () => import('./projects/project-list/project-list.module').then( m => m.ProjectListPageModule)
  },
  {
    path: 'about-us',
    loadChildren: () => import('./pages/about-us/about-us.module').then( m => m.AboutUsPageModule)
  },
  {
    path: 'council-members',
    loadChildren: () => import('./pages/council-members/council-members.module').then( m => m.CouncilMembersPageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./projects/tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: 'tab1',
    loadChildren: () => import('./projects/tab1/tab1.module').then( m => m.Tab1PageModule)
  },
  {
    path: 'tab2',
    loadChildren: () => import('./projects/tab2/tab2.module').then( m => m.Tab2PageModule)
  },
  {
    path: 'tab3',
    loadChildren: () => import('./projects/tab3/tab3.module').then( m => m.Tab3PageModule)
  },
  { path: '', loadChildren: './projects/tabs/tabs.module#TabsPageModule' },
  {
    path: 'complaint-suggest',
    loadChildren: () => import('./pages/complaint-suggest/complaint-suggest.module').then( m => m.ComplaintSuggestPageModule)
  },
  {
    path: 'survey',
    loadChildren: () => import('./pages/survey/survey.module').then( m => m.SurveyPageModule)
  },
  {
    path: 'event',
    loadChildren: () => import('./pages/event/event.module').then( m => m.EventPageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
