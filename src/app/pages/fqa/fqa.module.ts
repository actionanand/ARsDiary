import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FqaRoutingModule } from './fqa-routing.module';
import { FqaComponent } from './fqa.component';


@NgModule({
  declarations: [
    FqaComponent
  ],
  imports: [
    CommonModule,
    FqaRoutingModule
  ]
})
export class FqaModule { }
