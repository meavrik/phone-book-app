import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'simple-form',
  template: `
  <div>
    <input #myInput type='text'
     [(ngModel)]="message"
     [ngClass]="{mousedown:isMouseDown}"
     (mousedown)="isMouseDown = true"
     (mouseup)="isMouseDown = false"
     (mouseleave)="isMouseDown = false"
     >
    <button (click)="update.emit({text:message})">Click me!</button>
  </div>

  `,
  styles : [
    `host 
  {
    display:flex;
    flex0direction:column;
    
  }

  .mousedown {
    border :2px solid green
  }
  *{
    font-family:monospace;
  }

  input:focus {
    font-weight:bold;
    outline:none;
  }

  button {
    border:none;
  }
  `]

})
export class SimpleFormComponent implements OnInit {


  @Input() message;
  @Output() update = new EventEmitter();

  private isMouseDown:boolean;
  constructor() { }

  ngOnInit() {
  }

}
