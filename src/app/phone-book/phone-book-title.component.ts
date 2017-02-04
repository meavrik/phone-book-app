import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'phone-book-title',
  template: `
      <h1 >{{title}}</h1>
  `,
  styles: [`h1{
    font-size:50px;
    text-align:center;
  }`]
})
export class PhoneBookTitleComponent {

  @Input() title:string;
  constructor() { }

}
