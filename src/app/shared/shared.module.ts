import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgWpComponentsModule } from 'ng-wp-components';
import { ScullyInterceptModule } from 'scully-interceptor';

import { environment } from '../../environments/environment';
import { StripHtmlPipe } from '../pipes/strip-html.pipe';
import { EllipsisPipe } from '../pipes/ellipsis.pipe';
import { RmApostrophePipe } from '../pipes/rm-apostrophe.pipe';
import { SassHelperModule } from './sass-helper/sass-helper.module';


@NgModule({
  declarations: [StripHtmlPipe, EllipsisPipe, RmApostrophePipe],
  imports: [
    CommonModule,
    SassHelperModule,
    NgWpComponentsModule.forRoot(environment.wp_url),
    // NgWpComponentsModule.forRoot(environment.wp_url2),
    ScullyInterceptModule
  ],
  exports: [
    NgWpComponentsModule,
    ScullyInterceptModule,
    StripHtmlPipe,
    EllipsisPipe,
    RmApostrophePipe,
    SassHelperModule
  ]
})
export class SharedModule { }
