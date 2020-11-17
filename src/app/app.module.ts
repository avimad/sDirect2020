import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TestCompComponent } from './test-comp/test-comp.component';
import { FormsModule } from '@angular/forms';
import { SideBarComponent } from './Component/side-bar/side-bar.component';
import { ToolBarComponent } from './Component/tool-bar/tool-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    TestCompComponent,
    SideBarComponent,
    ToolBarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
