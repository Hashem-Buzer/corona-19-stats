import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DateAgoPipe } from './pipes/date-ago.pipe';
import { NavbarComponent } from './home/navbar/navbar.component';
import { FooterComponent } from './home/footer/footer.component';
import { EnglishComponent } from './home/english/english.component';
import { EnglishDateAgoPipe } from './pipes/english-date-ago.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DateAgoPipe,
    NavbarComponent,
    FooterComponent,
    EnglishComponent,
    EnglishDateAgoPipe,
  ],
  imports: [HttpClientModule, BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
