import { Component, OnInit } from '@angular/core';
import { interval, Observable } from 'rxjs';

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.css']
})
export class ObservablesComponent implements OnInit {

  ngOnInit(): void {
    this.initObservable();
  }

  initObservable(): void {
    const observable = new Observable((subscriber) => {
      subscriber.next('Jair');
      subscriber.next(123);
      subscriber.next(true);
      subscriber.next({ name: 'Jair' });
      subscriber.complete();
    });

    const observer = {
      next: (x: any) => console.log('Observer next value' + x),
      error: (err: any) => console.log('Observer error' + err),
      complete: () => console.log('Observer complete')
    }

    const it = interval(1000);

    observable.subscribe(observer);

    const subscription = observable.subscribe(observer);
    const subscription2 = it.subscribe(console.log);

    setTimeout(() => {
      subscription2.unsubscribe();
    }, 3000);

    /*observale.subscribe(
    (res: any) => {
      console.log(res);
    },
    (error: any) => {
      console.log(error);
    });*/
  }
}
