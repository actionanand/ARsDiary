import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostRoutingModule } from './post-routing.module';
import { PostComponent } from './post.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { Page404Module } from '../page404/page404.module';


@NgModule({
  declarations: [
    PostComponent
  ],
  imports: [
    CommonModule,
    PostRoutingModule,
    SharedModule,
    Page404Module
  ]
})
export class PostModule { }
