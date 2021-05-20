import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  bgColor: string = '#292b2c';

  constructor() { }

  ngOnInit(): void {  }

   changeStyle($event){
    this.bgColor = $event.type == 'mouseover' ? '#5cb85c' : '#292b2c';
    }

}
