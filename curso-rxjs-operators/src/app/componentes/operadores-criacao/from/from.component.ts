import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';

@Component({
  selector: 'app-from',
  templateUrl: './from.component.html',
  styleUrls: ['./from.component.css']
})
export class FromComponent implements OnInit {

  ngOnInit(): void {
    this.operatorFrom();
  }

  operatorFrom(): void {
    const arr = from([1, 2, 3, 4, 5]);
    const promise = from(new Promise(resolve => resolve('Ola Mundo!')));
    const str = from('Jair');

    arr.subscribe(res => console.log(res));
    promise.subscribe(res => console.log(res));
    str.subscribe(res => console.log(res));
  }
}
