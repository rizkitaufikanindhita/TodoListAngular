import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { MainService } from './main.service';
import { TableModule } from 'primeng/table';

@NgModule({
  declarations: [MainComponent],
  imports: [CommonModule, MainRoutingModule, TableModule],
  exports: [MainComponent],
  providers: [MainService],
})
export class MainModule {}
