import { Component, OnInit } from '@angular/core';
import { ITraining } from './training';

@Component({
  selector: 'app-training-list',
  templateUrl: './training-list.component.html',
  styleUrls: ['./training-list.component.css']
})
export class TrainingListComponent implements OnInit {
  pageTitle: string = 'List of Trainings';

  _listFilter: string;
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredTrainings = this.listFilter ? this.performFilter(this.listFilter) : this.trainings;
  }

  filteredTrainings: ITraining[];
  trainings: ITraining[] = [
    {
      'trainingId': 1,
      'trainingTitle': 'Quick Warm-up',
      'bodyParts': 'Legs, shoulders, biceps',
      'description': 'Very poor training!',
      'difficulty': 1
    },
    {
      'trainingId': 2,
      'trainingTitle': 'Long Warm-up',
      'bodyParts': 'Triceps, belly, legs',
      'description': 'Quite poor training!',
      'difficulty': 2
    },
    {
      'trainingId': 3,
      'trainingTitle': 'Shoulders Day',
      'bodyParts': 'Legs, shoulders, biceps',
      'description': 'Nice training!',
      'difficulty': 4
    },
    {
      'trainingId': 4,
      'trainingTitle': 'Leg Day',
      'bodyParts': 'Triceps, belly, legs',
      'description': 'Medium level training!',
      'difficulty': 3
    },
      {
        'trainingId': 5,
      'trainingTitle': 'Cardio on foot',
      'bodyParts': 'Legs, shoulders, biceps',
      'description': 'Nice training!',
      'difficulty': 4
    },
    {
      'trainingId': 6,
      'trainingTitle': 'Cardio on bike',
      'bodyParts': 'Triceps, belly, legs',
      'description': 'Medium level training!',
      'difficulty': 3
    },
    {
      'trainingId': 7,
      'trainingTitle': 'Strength',
      'bodyParts': 'Legs, shoulders, biceps',
      'description': 'Very nice training!',
      'difficulty': 5
    },
    {
      'trainingId': 8,
      'trainingTitle': 'Lazy Sunday',
      'bodyParts': 'Triceps, belly, legs',
      'description': 'Very poor training!',
      'difficulty': 1
    }
  ];

  constructor() {
    this.filteredTrainings = this.trainings;
    this.listFilter = 'cardio';
  }

  performFilter(filterBy: string): ITraining[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.trainings.filter((training: ITraining) => training.trainingTitle.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  ngOnInit() {
  }

}
