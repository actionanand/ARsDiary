import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';

import { SassHelperComponent } from 'src/app/shared/sass-helper/sass-helper.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {

  @ViewChild(SassHelperComponent) private sassHelper: SassHelperComponent;

  bSuccess: string;
  balticSea: string;
  bgColor: string;

  constructor() { }

  ngOnInit(): void {
    // console.log(this.readProperty('bSuccess'));
   }

   ngAfterViewInit() {
    this.balticSea = this.sassHelper.readProperty('balticSea');
    this.bSuccess = this.sassHelper.readProperty('bSuccess');
    this.bgColor = this.balticSea;
   }


  // readProperty(name: string): string {
  //   const bodyStyles = window.getComputedStyle(document.body);
  //   return bodyStyles.getPropertyValue('--' + name);
  // }

   changeStyle($event: MouseEvent){
    this.bgColor = $event.type == 'mouseover' ? this.bSuccess : this.balticSea;
    }

}
