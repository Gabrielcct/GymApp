import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WorkoutService } from 'src/app/workout/workout.service';

@Component({
  selector: 'app-saved-workouts',
  templateUrl: './saved-workouts.component.html',
  styleUrls: ['./saved-workouts.component.css'],
})
export class SavedWorkoutsComponent implements OnInit {
  public workout: any;
  public isWorkout: boolean = false;
  public time: number = 0;
  public interval: any;
  public display: any;
  public isPaused: boolean = false;
  constructor(private router: Router, public workoutService: WorkoutService) {}

  ngOnInit() {
    this.workout = this.workoutService.workout;
    if (!this.workout) {
      alert('No workouts available');
      this.router.navigate(['saved']);
    }
  }

  unsetDone(set: any) {
    set['isDone'] = false;
  }

  setDone(set: any) {
    set['isDone'] = true;
  }

  startWorkout() {
    this.isWorkout = true;
    this.startTimer();
  }

  finishWorkout() {
    this.isWorkout = false;
    this.resetSets();
    this.router.navigate(['saved']);
    this.resetTimer();
  }

  resetSets() {
    this.workout.excercises.forEach((excercise: any) => {
      if (excercise?.sets) {
        excercise.sets.forEach((set: any) => {
          if (set.isDone) {
            set.isDone = false;
          }
        });
      }
    });
  }

  startTimer() {
    this.isPaused = false;
    // increase timer by 1 second every
    this.interval = setInterval(() => {
      if (this.time === 0) {
        this.time++;
      } else {
        this.time++;
      }
      this.display = this.transform(this.time);
    }, 1000);
  }

  transform(value: number): string {
    const minutes: number = Math.floor(value / 60);
    return minutes + ':' + (value - minutes * 60);
  }

  pauseTimer() {
    this.isPaused = true;
    clearInterval(this.interval);
  }

  resetTimer() {
    this.pauseTimer();
    this.time = 0;
  }
}
