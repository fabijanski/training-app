import { Component, OnInit } from '@angular/core';
import { ITraining } from './training';
import { TrainingService } from './training.service';

@Component({
  selector: 'app-training-list',
  templateUrl: './training-list.component.html',
  styleUrls: ['./training-list.component.css']
})
export class TrainingListComponent implements OnInit {
  pageTitle: string = 'List of Trainings';
  errorMessage: string;

  _listFilter: string;
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredTrainings = this.listFilter ? this.performFilter(this.listFilter) : this.trainings;
  }

  filteredTrainings: ITraining[];
  trainings: ITraining[] = [];

  constructor(private _trainingService: TrainingService) {
  }

  performFilter(filterBy: string): ITraining[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.trainings.filter((training: ITraining) => training.trainingTitle.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  ngOnInit(): void {
    this._trainingService.getTrainings()
      .subscribe(
        trainings => {
          this.trainings = trainings;
          this.filteredTrainings = this.trainings;
        },
        error => this.errorMessage = <any>error);
  }

}
