import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BindingContextModule } from 'projects/binding-context/src/public-api';

import { AppComponent } from './app.component';
import { DummyComponent } from './dummy/dummy.component';

@NgModule({
  declarations: [AppComponent, DummyComponent],
  imports: [BrowserModule, BindingContextModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
