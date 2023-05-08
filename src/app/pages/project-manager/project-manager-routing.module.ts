import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectManagerComponent } from './project-manager.component';
import { ProjectManagerListComponent } from './project-manager-list/project-manager-list.component';
import { ProjectManagerDetailComponent } from './project-manager-detail/project-manager-detail.component';

const routes: Routes = [
    
  {
    path: '',
    component: ProjectManagerComponent,
    children: [
      {
        path: '',
        component: ProjectManagerListComponent,
      },
      {
        path: ':id',
        component: ProjectManagerDetailComponent,
      }
    ]
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectManagerRoutingModule { }
