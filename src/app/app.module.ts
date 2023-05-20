import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SavedComponent } from './saved/saved.component';
import { WorkoutComponent } from './workout/workout.component';
import { ProgressComponent } from './progress/progress.component';
import { SettingsComponent } from './settings/settings.component';
import { SavedWorkoutsComponent } from './saved/saved-workouts/saved-workouts.component';
import { ExercisesComponent } from './workout/exercises/exercises.component';
import { SetsComponent } from './workout/sets/sets.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SavedComponent,
    WorkoutComponent,
    ProgressComponent,
    SettingsComponent,
    SavedWorkoutsComponent,
    ExercisesComponent,
    SetsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
