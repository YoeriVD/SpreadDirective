import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlattenModule } from 'projects/flatten/src/public-api';

import { AppComponent } from './app.component';
import { DummyComponent } from './dummy/dummy.component';

@NgModule({
  declarations: [
    AppComponent,
    DummyComponent
  ],
  imports: [
    BrowserModule,
    FlattenModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
