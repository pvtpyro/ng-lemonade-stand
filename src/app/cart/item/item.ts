import { Component } from '@angular/core';
import { Glass } from "../../lemonade/glass/glass";

@Component({
  selector: 'app-item',
  imports: [Glass],
  templateUrl: './item.html',
  styleUrl: './item.scss'
})
export class Item {

}
