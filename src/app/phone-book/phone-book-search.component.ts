import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'phone-book-search',
  template: `
    <div >
        <input type="text" placeholder="{{this.searchLabelText}}" class="control-label col-sm-2">
        <button class="btn-primary">Search</button>
    </div>

    <div >
        
    </div>
  `,
  styles: [`
    div{
      width:100%;
      height:100px;
    }
    `
  ]
})
export class PhoneBookSearchComponent  {

  @Input() searchLabelText:string;
  constructor() { 
  
  }

}
