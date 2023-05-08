import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CurriculumVitaeComponent } from './curriculum-vitae/curriculum-vitae.component';
import { HomeComponent } from './home/home.component';
import { LibraryComponent } from './library/library.component';
import { PagesComponent } from './pages.component';
import { ProfileComponent } from './profile/profile.component';
import { ProjectManagerComponent } from './project-manager/project-manager.component';

const routes: Routes = [
    
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'cv',
        component: CurriculumVitaeComponent,
      },
      {
        path: 'profile',
        component: ProfileComponent,
      },
      {
        path: 'library',
        component: LibraryComponent,
      },
      {
        path: 'project-manager',
        loadChildren: () =>
          import('./project-manager/project-manager.module').then((m) => m.ProjectManagerModule),
      },
      { path: '', redirectTo: 'project-manager', pathMatch: 'full' },
    ]
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
