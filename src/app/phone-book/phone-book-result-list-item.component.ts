import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'phone-book-result-list-item',
  template: `
  
  <img class="user-avatar" src="{{person.avatar_origin}}" />

    <div class="cui__selector--direct__label">
      {{person.name}}
    </div>

    <div class="cui__selector--direct__label">
      <p class="cui__selector--direct__description">
        {{person.address.street}}, {{person.address.city}}, {{person.address.country}}
      </p>

      <p class="cui__selector--direct__description">
        Contact <span><b> {{person.phone}}</b></span>
      </p>

      <p class="cui__selector--direct__description">
        Born in <span><b> {{person.birthday | date}}</b></span>
      </p>
    </div>
  `,
  styles: [
  `img {
    border:2px solid red;
  }`]
})
export class PhoneBookResultListItemComponent {

  @Input() person:any;
}
