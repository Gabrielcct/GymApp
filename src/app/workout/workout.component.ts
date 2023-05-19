import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-workout',
  templateUrl: './workout.component.html',
  styleUrls: ['./workout.component.css'],
})
export class WorkoutComponent {
  constructor(private router: Router) {}

  addExcercises() {
    this.router.navigate(['excercises']);
  }
}
