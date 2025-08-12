import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lemonade } from "./lemonade/lemonade";

@Component({
  selector: 'app-root',
  imports: [CommonModule, Lemonade],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('lemonadestand');
}
