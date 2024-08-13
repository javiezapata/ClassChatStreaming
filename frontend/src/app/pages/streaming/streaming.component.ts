import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-streaming',
  templateUrl: './streaming.component.html',
  styleUrls: ['./streaming.component.css']
})
export class streamingComponent implements OnInit {
  title='Edutech';

  constructor(private router:Router) { }
  streaming?:Observable<any>;


  ngOnInit() {
  }


}
