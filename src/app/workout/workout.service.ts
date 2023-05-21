import { Injectable } from '@angular/core';
import { Excercise } from './exercises/excercise.class';
import { SetClass } from './sets/set.class';
import { WorkoutClass } from './workout.class';

@Injectable({
  providedIn: 'root',
})
export class WorkoutService {
  public excercises: Array<any> = [];
  public currentExcercise: any;
  public currentWorkoutName: string = '';
  public savedWorkout: any;
  public savedWorkouts: Array<any> = [];
  public workout: any;
  constructor() {}

  public addExcercises(excercises: any): void {
    this.excercises.push(excercises);
  }

  public addSetsToExcercise(sets: Array<SetClass>) {
    this.currentExcercise.sets = sets;
  }

  saveWorkout() {
    this.savedWorkout = new WorkoutClass(
      this.currentWorkoutName,
      this.excercises
    );
    this.savedWorkouts.push(this.savedWorkout);
  }
}
