import { PhoneBookModule } from './phone-book/phone-book.module';
import { ClientsService } from './clients.service';
import { WidgetsModule } from './widgets/widgets.module';
import { MailService } from './mail.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SimpleFormComponent } from './simple-form/simple-form.component';

@NgModule({
  declarations: [
    AppComponent,
    SimpleFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    WidgetsModule,
    PhoneBookModule
  ],
  providers: [MailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
