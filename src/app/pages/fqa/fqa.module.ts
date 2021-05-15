import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FqaRoutingModule } from './fqa-routing.module';
import { FqaComponent } from './fqa.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    FqaComponent
  ],
  imports: [
    CommonModule,
    FqaRoutingModule,
    SharedModule
  ]
})
export class FqaModule { }
