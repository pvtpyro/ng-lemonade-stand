import { Component, Input } from '@angular/core';
import { Liquid } from "./liquid/liquid";

@Component({
  selector: 'app-glass',
  imports: [Liquid],
  templateUrl: './glass.html',
  styleUrl: './glass.scss'
})
export class Glass {

    @Input() percentLemonJuice: number = 0;
    @Input() percentSugar: number = 0;
    @Input() numberOfIceCubes: number = 0;
    @Input() classNames: string = '';

}
