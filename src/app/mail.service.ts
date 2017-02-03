import { Injectable } from '@angular/core';

@Injectable()
export class MailService {

  public messages = [
    { id: 0, text: `got an error` },
    { id: 1, text: `nice job!!` },
    { id: 2, text: `you've got mail` }]



  update(id,text)
  {
      this.messages = this.messages.map(m => 
      m.id === id ? {id,text}:m);
  }

  constructor() { }

}
