import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { WorkoutService } from '../workout/workout.service';

@Component({
  selector: 'app-saved',
  templateUrl: './saved.component.html',
  styleUrls: ['./saved.component.css'],
})
export class SavedComponent {
  constructor(private router: Router, public workoutService: WorkoutService) {}

  navigateTo(): void {
    this.router.navigate(['/workout']);
  }
}
