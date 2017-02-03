import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'phone-book-title',
  template: `
    <div class="cui__selector--direct title">
        <h1 class="cui__selector--direct__title">{{title}}</h1>
    </div>
  `,
  styles: []
})
export class PhoneBookTitleComponent {

  @Input() title:string;
  constructor() { }

}
