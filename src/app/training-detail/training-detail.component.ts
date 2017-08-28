import { Component, OnInit } from '@angular/core';
import { ITraining } from '../training-list/training';

@Component({
  templateUrl: './training-detail.component.html',
  styleUrls: ['./training-detail.component.css']
})
export class TrainingDetailComponent implements OnInit {
  pageTitle: string = 'Training Detail';
  training: ITraining;

  constructor() { }

  ngOnInit() {
  }

}
