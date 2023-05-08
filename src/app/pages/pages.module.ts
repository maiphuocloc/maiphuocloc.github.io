import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { LibraryComponent } from './library/library.component';
import { CurriculumVitaeComponent } from './curriculum-vitae/curriculum-vitae.component';
import { PagesComponent } from './pages.component';
import { ShareModule } from '../share/share.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    HomeComponent,
    ProfileComponent,
    LibraryComponent,
    CurriculumVitaeComponent,
    PagesComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    PagesRoutingModule,
    ShareModule
  ],
})
export class PagesModule { }
