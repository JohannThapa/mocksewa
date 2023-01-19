import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './root/navbar/navbar.component';
import { FooterComponent } from './root/footer/footer.component';



@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    // root
    NavbarComponent
  ]
})
export class LayoutsModule { }
