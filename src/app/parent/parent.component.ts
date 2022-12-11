import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  @ViewChild(ChildComponent) child;

  getMin(a,b) {
    if(a < b) {
      return a;
    }

    return b;
  }
  receiveMessage(msg) {
    alert(msg);
  }

  ngOnInit() {
    alert(this.getMin(5,10))

  }

  ngAfterViewInit() {
    alert(this.child.message);
  }
}
