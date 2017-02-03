import { ClientsService } from './../clients.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'phone-book',
  template: `
    <phone-book-title [title]="text"></phone-book-title>
    <phone-book-search [searchLabelText]="searchText"></phone-book-search>
    <phone-book-result-list></phone-book-result-list>
  `,
  styles: []
})
export class PhoneBookMainComponent {
  private text:string = "Phone book";
  private searchText:string = "Type your search query (name, phone or age)"
}
