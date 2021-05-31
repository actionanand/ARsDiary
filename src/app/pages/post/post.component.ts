import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})

export class PostComponent implements OnInit {

  slug$: Observable<string>;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
     this.slug$ = this.route.paramMap.pipe(
      map( params => params.get( 'post-slug' ))
    );
  }

}
