import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';



@NgModule({
    declarations: [
    HeaderComponent,
    FooterComponent
  ],
    exports: [HeaderComponent,FooterComponent],
    imports: [
      FormsModule,
      CommonModule,
      ReactiveFormsModule,
      RouterModule
    ]
})
export class ShareModule { }