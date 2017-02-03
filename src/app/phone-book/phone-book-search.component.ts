import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'phone-book-search',
  template: `
    <div class="cui__selector--direct__title">
        <input type="text" placeholder="{{this.searchLabelText}}" class="cui__input__label">
    </div>

    <div class="cui__selector--direct__title">
        <button id="findbutton" class="cui__input__label">Find them all :)</button>
    </div>
  `,
  styles: []
})
export class PhoneBookSearchComponent  {

  @Input() searchLabelText:string;
  constructor() { 
  
  }

}
