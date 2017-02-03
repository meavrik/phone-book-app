import { ClientsService } from './../clients.service';
import { PhoneBookTitleComponent } from './phone-book-title.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhoneBookMainComponent } from './phone-book-main.component';
import { PhoneBookSearchComponent } from './phone-book-search.component';
import { PhoneBookResultListComponent } from './phone-book-result-list.component';
import { PhoneBookResultListItemComponent } from './phone-book-result-list-item.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PhoneBookTitleComponent, PhoneBookMainComponent, PhoneBookSearchComponent, PhoneBookResultListComponent, PhoneBookResultListItemComponent],
  exports : [PhoneBookMainComponent],
  providers: [ClientsService],

})
export class PhoneBookModule { }
