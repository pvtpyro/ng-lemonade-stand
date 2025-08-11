import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Lemonade } from "./lemonade/lemonade";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Lemonade],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('lemonadestand');
}
