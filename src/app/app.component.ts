import { Component } from '@angular/core';
import { TrainingService } from './training-list/training.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TrainingService]
})
export class AppComponent {
  title: string = 'Manage Your Training!';
}
