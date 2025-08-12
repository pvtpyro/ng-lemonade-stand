import { Component, Input } from '@angular/core';
import { Wave } from "./wave/wave";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-liquid',
  imports: [Wave, CommonModule],
  templateUrl: './liquid.html',
  styleUrl: './liquid.scss'
})
export class Liquid {

    @Input() percentLemonJuice: number = 0;
    @Input() percentSugar: number = 0;
    @Input() numberOfIceCubes: number = 0;
    
}
