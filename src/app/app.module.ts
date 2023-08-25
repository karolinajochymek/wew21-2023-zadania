import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ItemComponent } from './unoptimalized-items-list/item/item.component';
import { UnoptimalizedItemsListComponent } from './unoptimalized-items-list/unoptimalized-items-list.component';
import { FormsModule } from '@angular/forms';
import { MainPageComponent } from './main-page/main-page.component';
import { LowPricePipe } from './pipes/low-price.pipe';
import { FullStockPipe } from './pipes/full-stock.pipe';
import { UpperCaseByLastIndxPipe } from './pipes/upper-case-by-last-indx.pipe';
import { TextGeneratorPipe } from './pipes/text-generator.pipe';
import { SimpleCheckPermissionDirective } from './directives/simple-check-permission.directive';
import { CheckPermissionDirective } from './directives/check-permission.directive';
import { ColorChangeDirective } from './directives/color-change.directive';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    ItemComponent,
    UnoptimalizedItemsListComponent,
    LowPricePipe,
    FullStockPipe,
    UpperCaseByLastIndxPipe,
    TextGeneratorPipe,
    SimpleCheckPermissionDirective,
    CheckPermissionDirective,
    ColorChangeDirective
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
