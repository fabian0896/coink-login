import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-num-pad',
  templateUrl: './num-pad.component.html',
  styleUrls: ['./num-pad.component.scss'],
})
export class NumPadComponent implements OnInit {
  numbers: number[] = Array.from({ length: 12 }, (_, i) => i + 1);
  constructor() { }

  ngOnInit() {}

}
