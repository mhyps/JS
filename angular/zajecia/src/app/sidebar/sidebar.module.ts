import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar.component';
import { SidebarItemComponent } from './sidebar-item/sidebar-item.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [SidebarComponent, SidebarItemComponent],
  exports: [SidebarComponent],
  imports: [CommonModule, RouterModule],
})
export class SidebarModule {}
