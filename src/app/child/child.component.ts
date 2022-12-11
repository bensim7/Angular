
import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  styles: ['h2 {color: green}'],
  encapsulation: ViewEncapsulation.None
})
export class ChildComponent implements OnInit {
  @Input() childMessage: string;
  @Output() messageEvent = new EventEmitter<string>();
  hello = "hello from ch"
  message = "message from viewChild"
  ngOnInit(): void {

  }



  sendMessage () {
    this.messageEvent.emit(this.hello);
  }
}
