import { Component, Input } from '@angular/core';
import { Glass } from "../../lemonade/glass/glass";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-item',
  imports: [Glass, CommonModule],
  templateUrl: './item.html',
  styleUrl: './item.scss'
})
export class Item {

    @Input() lemonade: any;
    
}
