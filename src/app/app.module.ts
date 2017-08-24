import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { PropertyComponent } from './property/property.component';
import { StringComponent } from './string/string.component';
import { EventComponent } from './event/event.component';
import { TwowayComponent } from './twoway/twoway.component';

@NgModule({
  declarations: [
    AppComponent,
    PropertyComponent,
    StringComponent,
    EventComponent,
    TwowayComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
