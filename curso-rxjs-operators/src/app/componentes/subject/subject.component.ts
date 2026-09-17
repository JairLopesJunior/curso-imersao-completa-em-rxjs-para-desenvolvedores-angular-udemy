import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {


  ngOnInit(): void {
    this.initSubject();
  }

  initSubject(): void {
    const subject = new Subject();
    const subject2 = new BehaviorSubject(0);

    subject2.subscribe({
      next: (v: any) => console.log(v)
    });

    subject2.subscribe({
      next: (v: any) => console.log(v)
    });

    subject.next(10);
    subject.next(12);
  }
}
