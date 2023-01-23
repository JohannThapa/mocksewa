import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './root/navbar/navbar.component';
import { FooterComponent } from './root/footer/footer.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [NavbarComponent, FooterComponent],
  exports: [
    // root
    NavbarComponent,
  ],
  imports: [CommonModule, SharedModule],

  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class LayoutsModule {}
