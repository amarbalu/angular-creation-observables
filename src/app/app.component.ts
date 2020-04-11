import { Component } from '@angular/core';
import {from,fromEvent,of,pipe,interval,forkJoin} from "rxjs";
import {take,map} from "rxjs/operators";
// Observables creation operators - from,of,fromEvent
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  constructor(){
    // const a=from([1,2,3]);
    const a= from(fetch(`https://jsonplaceholder.typicode.com/posts`)).pipe(map(res=>res.json()))
    a.subscribe(sub=>console.log('from',sub));
    // Emit on every interval
     const b=interval(1000).pipe(take(2));
    b.subscribe(sub=>console.log('interval',sub))
    // Emit of values
    //Pipe for combine creation operators
    //take act as a filter filters one response value from three
     const c=of(1,2,3).pipe(take(1));
    c.subscribe(sub=>console.log('of',sub))
 
  }
  ngOnInit():void{
    //Emit an event
     const d=fromEvent(document.getElementById("head"),'click');
  d.subscribe(val=>console.log(val.timeStamp))
  }
}
