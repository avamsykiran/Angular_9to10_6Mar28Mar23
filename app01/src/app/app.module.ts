import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { PipesDemoComponent } from './pipes-demo/pipes-demo.component';
import { CapitalPipe } from './capital.pipe';
import { IntoWordsPipe } from './into-words.pipe';
import { FriendsComponent } from './friends/friends.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    PipesDemoComponent,
    CapitalPipe,
    IntoWordsPipe,
    FriendsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
