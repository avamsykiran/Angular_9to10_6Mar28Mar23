import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OutletsComponent } from './outlets/outlets.component';
import { OutletFormComponent } from './outlet-form/outlet-form.component';

@NgModule({
  declarations: [
    AppComponent,
    OutletsComponent,
    OutletFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
