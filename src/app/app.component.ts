import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { WorkoutService } from './workout/workout.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private router: Router) {}
}
