import { Component, OnChanges, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class StarComponent implements OnChanges {
  @Input() difficulty: number;
  starWidth: number;

  constructor() { }

  ngOnChanges(): void {
    this.starWidth = this.difficulty * 86 / 5;
  }
}
