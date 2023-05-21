import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WorkoutService } from '../workout/workout.service';

@Component({
  selector: 'app-saved',
  templateUrl: './saved.component.html',
  styleUrls: ['./saved.component.css'],
})
export class SavedComponent implements OnInit {
  file: any = null;
  btnText: string = 'Import Workouts';
  isImport: boolean = false;
  isLoading: boolean = false;
  constructor(private router: Router, public workoutService: WorkoutService) {}

  ngOnInit() {
    this.resetCurrentWorkout();
  }

  navigateTo(): void {
    this.resetCurrentWorkout();
    this.router.navigate(['/workout']);
  }

  resetCurrentWorkout() {
    this.workoutService.currentWorkoutName = '';
    this.workoutService.excercises = [];
    this.workoutService.currentExcercise = null;
  }

  saveWorkouts() {
    let text = JSON.stringify(this.workoutService.savedWorkouts);
    var a = document.createElement('a');
    a.setAttribute(
      'href',
      'data:text/plain;charset=utf-u,' + encodeURIComponent(text)
    );
    a.setAttribute('download', 'workouts.json');
    a.click();
  }

  importWorkouts() {
    this.isImport = !this.isImport;
    this.btnText = this.isImport ? 'Import Workouts' : 'Cancel Import';
    this.isLoading = false;
  }

  displayLoading(e: any) {
    this.isLoading = true;
  }

  fileChanged(e: any) {
    this.isLoading = false;
    this.file = e.target.files[0];
  }

  uploadDocument() {
    let fileReader = new FileReader();
    fileReader.onload = (e) => {
      if (fileReader.result != null) {
        this.workoutService.savedWorkouts = JSON.parse(
          fileReader.result as string
        );
        this.isImport = false;
      }
    };
    fileReader.readAsText(this.file);
  }

  goToWorkout(workout: any) {
    this.workoutService.workout = workout;
    this.router.navigate(['/saved-workouts']);
  }
}
