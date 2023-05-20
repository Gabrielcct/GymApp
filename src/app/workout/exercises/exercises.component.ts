import { Component, OnInit } from '@angular/core';
import { WorkoutService } from '../workout.service';
import { Router } from '@angular/router';
import { EXCERCISES_TYPE, Excercise } from './excercise.class';

@Component({
  selector: 'app-exercises',
  templateUrl: './exercises.component.html',
  styleUrls: ['./exercises.component.css'],
})
export class ExercisesComponent implements OnInit {
  public exercises: Array<any> = [];
  constructor(private workoutService: WorkoutService, private router: Router) {}

  ngOnInit() {
    this.exercises = this.createExercises();
  }

  addExcercises(item: any): void {
    this.workoutService.addExcercises(item);
    this.router.navigate(['workout']);
  }

  createExercises(): Array<any> {
    return [
      {
        type: 'Chest',
        exercises: [
          new Excercise('bench-press', 'Bench press', EXCERCISES_TYPE.chest),
          new Excercise(
            'barbell-bench',
            'Barbell press',
            EXCERCISES_TYPE.chest
          ),
          new Excercise('dumbbell-fly', 'Dumbbell fly', EXCERCISES_TYPE.chest),
        ],
      },
      {
        type: 'Back',
        exercises: [
          new Excercise('lat-pulldown', 'Lat pulldown', EXCERCISES_TYPE.back),
          new Excercise(
            'seated-cable-row',
            'Seated cable row',
            EXCERCISES_TYPE.back
          ),
          new Excercise('TBar-row', 'TBar row', EXCERCISES_TYPE.back),
        ],
      },
      {
        type: 'Legs',
        exercises: [
          new Excercise('calf-rise', 'Calf Rise', EXCERCISES_TYPE.legs),
          new Excercise('deadlift', 'Deadlift', EXCERCISES_TYPE.legs),
          new Excercise('sumo-deadlift', 'Sumo deadlift', EXCERCISES_TYPE.legs),
        ],
      },
    ];
  }
}
