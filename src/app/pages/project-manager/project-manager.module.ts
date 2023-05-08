import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ProjectManagerComponent } from './project-manager.component';
import { ProjectManagerListComponent } from './project-manager-list/project-manager-list.component';
import { ShareModule } from 'src/app/share/share.module';
import { ProjectManagerRoutingModule } from './project-manager-routing.module';
import { ProjectManagerDetailComponent } from './project-manager-detail/project-manager-detail.component';

@NgModule({
  declarations: [
    ProjectManagerComponent,
    ProjectManagerListComponent,
    ProjectManagerDetailComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    ProjectManagerRoutingModule,
    ShareModule
  ],
})
export class ProjectManagerModule { }