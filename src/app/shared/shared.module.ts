import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../core/component/navbar/navbar.component';
import { FooterComponent } from '../core/component/footer/footer.component';
import { HeaderComponent } from '../core/component/header/header.component';



@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    HeaderComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    HeaderComponent,
  ]
})
export class SharedModule { }
