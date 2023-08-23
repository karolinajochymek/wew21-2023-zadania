import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ItemComponent } from './unoptimalized-items-list/item/item.component';
import { UnoptimalizedItemsListComponent } from './unoptimalized-items-list/unoptimalized-items-list.component';
import { FormsModule } from '@angular/forms';
import { MainPageComponent } from './main-page/main-page.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    ItemComponent,
    UnoptimalizedItemsListComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
