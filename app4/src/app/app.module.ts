import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { HomemenuComponent } from './homemenu/homemenu.component';
import { CarmenuComponent } from './carmenu/carmenu.component';
import { MymenuComponent } from './mymenu/mymenu.component';
import { ContactusComponent } from './contactus/contactus.component';
import { TelephonesComponent } from './telephones/telephones.component';
import { DetailsComponent } from './details/details.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    HomemenuComponent,
    CarmenuComponent,
    MymenuComponent,
    ContactusComponent,
    TelephonesComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
