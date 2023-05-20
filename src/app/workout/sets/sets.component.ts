import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WorkoutService } from '../workout.service';
import { SetClass } from './set.class';

@Component({
  selector: 'app-sets',
  templateUrl: './sets.component.html',
  styleUrls: ['./sets.component.css'],
})
export class SetsComponent implements OnInit {
  sets: Array<SetClass> = [];

  constructor(private router: Router, public workoutService: WorkoutService) {
    this.workoutService.currentExcercise;
  }

  ngOnInit() {
    this.sets = this.workoutService.currentExcercise?.sets || [];
    if (this.sets.length === 0) {
      this.sets.push(this.addEmptySet());
    }
  }

  addEmptySetToSets() {
    this.sets.push(this.addEmptySet());
  }

  addEmptySet(): SetClass {
    return new SetClass({ id: 'weight', value: '' }, { id: 'reps', value: '' });
  }

  deleteSetFromSets(index: number) {
    this.sets.splice(index, 1);
  }

  returnToWorkout() {
    this.router.navigate(['workout']);
  }
}
