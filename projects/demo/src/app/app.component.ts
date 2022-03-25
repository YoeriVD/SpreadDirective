import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  myObj = {
    some: 'some value',
    list: [1, 2, 3],
    vars: 'var1 var2 var3',
  };
}
