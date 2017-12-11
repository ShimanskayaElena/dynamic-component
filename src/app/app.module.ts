import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ContainerComponent } from './container/container.component';
import { HtmlOutletDirective } from './html-outlet.directive';

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    HtmlOutletDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
