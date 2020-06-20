import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dragon',
  templateUrl: './dragon.component.html',
  styleUrls: ['./dragon.component.scss'],
})
export class DragonComponent implements OnInit {
  name: string;

  constructor() {}

  ngOnInit(): void {}

  setName(data) {
    this.name = data;
  }
}
