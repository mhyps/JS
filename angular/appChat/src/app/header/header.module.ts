import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { HeaderLinkComponent } from './header-link/header-link.component';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [HeaderComponent, HeaderLinkComponent],
  exports: [HeaderComponent],
  imports: [CommonModule, AppRoutingModule],
})
export class HeaderModule {}
