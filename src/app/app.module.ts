import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TestCompComponent } from './test-comp/test-comp.component';
import { FormsModule } from '@angular/forms';
import { SideBarComponent } from './Component/side-bar/side-bar.component';
import { ToolBarComponent } from './Component/tool-bar/tool-bar.component';
import { ShopItemsComponent } from './Component/shop-items/shop-items.component';
import { CalDiscountPipe } from './pipes/cal-discount.pipe';
import { HiglightDirective } from './directives/higlight.directive';
import { SampleDirective } from './directives/sample.directive';
import { SamplePipe } from './pipes/sample.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TestCompComponent,
    SideBarComponent,
    ToolBarComponent,
    ShopItemsComponent,
    CalDiscountPipe,
    HiglightDirective,
    SampleDirective,
    SamplePipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
