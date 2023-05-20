import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { WorkoutService } from './workout.service';
import { Excercise } from './exercises/excercise.class';

@Component({
  selector: 'app-workout',
  templateUrl: './workout.component.html',
  styleUrls: ['./workout.component.css'],
})
export class WorkoutComponent {
  constructor(private router: Router, public workoutService: WorkoutService) {}

  addExcercises() {
    this.router.navigate(['excercises']);
  }

  addSet(excercise: Excercise) {
    this.workoutService.currentExcercise = excercise;
    this.router.navigate(['sets']);
  }

  saveWorkout() {
    this.workoutService.saveWorkout();
    this.router.navigate(['saved']);
  }
}
