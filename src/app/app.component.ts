import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
// export class AppComponent {
//   title = 'my-first-angular';
// }

export class AppComponent implements OnInit {
  title = 'my-first-angular';
  title2 = 'Hello World'
  intervalSub;

  getMin(a,b) {
    if(a < b) {
      return a;
    }

    return b;
  }

  ngOnInit() {
    this.intervalSub = setInterval(() => {
      console.log('Hello from ngOnInit');
    }, 1000);
  }

  ngOnDestroy() {
    if(this.intervalSub) {
      clearInterval(this.intervalSub);
    }
  }
}