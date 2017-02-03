import { ClientsService } from './../clients.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'phone-book-result-list',
  template: `
    <div *ngFor="let client of clients">
      <phone-book-result-list-item class="cui__selector--direct__item" [person]="client">
          <ng-content></ng-content>
      </phone-book-result-list-item>
    </div>
  `,
  styles: []
})
export class PhoneBookResultListComponent {

  errorMessage: string;
  clients: any[] = [];
  
  constructor(private clientService:ClientsService) 
  { 
    clientService.getClients().subscribe(clients => this.clients = clients, error => this.errorMessage = <any>error);
  }

}
