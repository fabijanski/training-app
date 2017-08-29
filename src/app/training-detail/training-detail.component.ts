import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ITraining } from '../training-list/training';
import { TrainingService } from '../training-list/training.service';

@Component({
  templateUrl: './training-detail.component.html',
  styleUrls: ['./training-detail.component.css']
})
export class TrainingDetailComponent implements OnInit {
  pageTitle: string = 'Training Detail';
  errorMessage: string;
  training: ITraining;

  constructor(private _route: ActivatedRoute,
              private _router: Router,
              private _trainingService: TrainingService) { }

  ngOnInit() {
    let id = +this._route.snapshot.paramMap.get('id');
    this.pageTitle += `: ${id}`;
    this.getTraining(id);
  }

  getTraining(id: number) {
    this._trainingService.getTraining(id).subscribe(
      training => this.training = training,
      error => this.errorMessage = <any>error
    )
  }

  onBack(): void {
    this._router.navigate(['/trainings']);
  }
}

