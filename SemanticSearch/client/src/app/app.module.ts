import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './module/app-routing.module';
import { AppComponent } from './components/app/app.component';
import { SearchbarComponent } from './components/searchbar/searchbar.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { NgForm, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DbpediaviewComponent } from './components/dbpediaview/dbpediaview.component';
import { FileviewComponent } from './components/fileview/fileview.component';
import { AlternativeviewComponent } from './components/alternativeview/alternativeview.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchbarComponent,
    WelcomeComponent,
    DbpediaviewComponent,
    FileviewComponent,
    AlternativeviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

   
  