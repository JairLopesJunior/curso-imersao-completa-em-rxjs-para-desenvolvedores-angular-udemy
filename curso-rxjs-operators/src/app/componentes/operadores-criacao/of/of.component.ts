import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'app-of',
  templateUrl: './of.component.html',
  styleUrls: ['./of.component.css']
})
export class OfComponent implements OnInit {

  ngOnInit(): void {
    this.operatorOf();
  }

  operatorOf(): void {
    const arr = of([1, 2, 3, 4, 5]);
    const str = of('Jair');
    const multiValue = of(
      {
        name: 'Jair',
      },
      true,
      function showName() {
        return 'Jair'
      }
    );

    arr.subscribe(res => console.log(res));
    str.subscribe(res => console.log(res));
    multiValue.subscribe(res => console.log(res));
  }
}
