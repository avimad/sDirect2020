import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TestCompComponent } from './test-comp/test-comp.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SideBarComponent } from './Component/side-bar/side-bar.component';
import { ToolBarComponent } from './Component/tool-bar/tool-bar.component';
import { ShopItemsComponent } from './Component/shop-items/shop-items.component';
import { CalDiscountPipe } from './pipes/cal-discount.pipe';
import { HiglightDirective } from './directives/higlight.directive';
import { SampleDirective } from './directives/sample.directive';
import { SamplePipe } from './pipes/sample.pipe';
import { ItemDetailsComponent } from './Component/item-details/item-details.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

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
    SamplePipe,
    ItemDetailsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    RouterModule.forRoot([
      { path: 'items', component: ShopItemsComponent },
      { path: 'item-details', component: ItemDetailsComponent },
      { path: 'item-details/:id', component: ItemDetailsComponent },
      { path: '', redirectTo: 'items', pathMatch: 'full' },
      {
        path: 'admin',
        loadChildren: () =>
          import('./admin/admin.module').then((m) => m.AdminModule),
      },
      {
        path: 'user',
        loadChildren: () =>
          import('./user/user.module').then((m) => m.UserModule),
      },
    ]),
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
