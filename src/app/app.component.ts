import { MailService } from './mail.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
          <phone-book></phone-book>   
  `,
  styleUrls : [`./app.component.css`]

})
export class AppComponent {

  onUpdate(id, text) {
    this.mail.update(id, text);

  }

  constructor(private mail: MailService) {
    

  }

}
