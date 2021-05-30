import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})

export class PostComponent implements OnInit, AfterViewInit {

  @ViewChild('checkTitle') private checkTitle: ElementRef;
  slug$: Observable<string>;
  wpPostFound: boolean = true;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
     this.slug$ = this.route.paramMap.pipe(
      map( params => params.get( 'post-slug' ))
    );
  }

  ngAfterViewInit() {
    try {
      setTimeout(() => {
      this.wpPostFound = !!this.checkTitle || false;
    },3000);
    } catch (error) {
      this.wpPostFound = false;
    }
  }

}
