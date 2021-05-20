import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgWpComponentsModule } from 'ng-wp-components';

import { environment } from '../../environments/environment';
import { StripHtmlPipe } from '../pipes/strip-html.pipe';
import { EllipsisPipe } from '../pipes/ellipsis.pipe';


@NgModule({
  declarations: [StripHtmlPipe, EllipsisPipe],
  imports: [
    CommonModule,
    // NgWpComponentsModule.forRoot(environment.wp_url)
    NgWpComponentsModule.forRoot(environment.wp_url2)
  ],
  exports: [
    NgWpComponentsModule,
    StripHtmlPipe,
    EllipsisPipe
  ]
})
export class SharedModule { }
