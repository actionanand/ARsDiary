import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgWpComponentsModule } from 'ng-wp-components';

import { environment } from '../../environments/environment';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    // NgWpComponentsModule.forRoot(environment.wp_url)
    NgWpComponentsModule.forRoot(environment.wp_url2)
  ],
  exports: [
    NgWpComponentsModule
  ]
})
export class SharedModule { }
