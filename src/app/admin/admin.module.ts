import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { EntryComponent } from './components/entry/entry.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [EntryComponent, DashboardComponent, ToolbarComponent],
  imports: [CommonModule, AdminRoutingModule, SharedModule],
})
export class AdminModule {}
