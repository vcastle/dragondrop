import { Component, OnInit } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss'],
})
export class FeaturesComponent implements OnInit {
  // default dragon
  traits = [
    {
      name: 'Purple',
      category: 'color',
    },
    {
      name: 'Tiny',
      category: 'attribute',
    },
    {
      name: 'Spiky Tail',
      category: 'attribute',
    },
    {
      name: 'Has Wings',
      category: 'attribute',
    },
    {
      name: 'Has Horns',
      category: 'attribute',
    },
  ];

  features = [
    {
      name: 'Huge',
      category: 'attribute',
    },
    {
      name: 'Red',
      category: 'color',
    },
    {
      name: 'Blue',
      category: 'color',
    },
    {
      name: 'Black',
      category: 'color',
    },
    {
      name: 'Has Top Hat',
      category: 'attribute',
    },
    {
      name: 'Has 3 Heads',
      category: 'attribute',
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  // take an arry of strings containing info about the containers and indexes
  onDrop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      // move items in respective lists
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      // move items between arrays
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
}
