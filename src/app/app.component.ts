import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!'
  // AppComponent's template can only access AppComponent's methods
  // Number must be stored as a method to make all non-number inputs NaN
  number = Number;
  // List is declared globally to be preserved between recursions
  static list = [0, 1]

  fibonacci = function (x: number) {
    if (x % 1 == 0 && x >= 0) {
      if (AppComponent.list[x] !== undefined) return AppComponent.list[x];
      else {
        AppComponent.list[x] = this.fibonacci(x-1) + this.fibonacci(x-2);
        return AppComponent.list[x]
      }
    }
    else return undefined;
  };
}
