import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SavedComponent } from './saved/saved.component';
import { SettingsComponent } from './settings/settings.component';
import { ProgressComponent } from './progress/progress.component';
import { WorkoutComponent } from './workout/workout.component';
import { ExercisesComponent } from './workout/exercises/exercises.component';

const routes: Routes = [
  { path: '', redirectTo: '/saved', pathMatch: 'full' },
  { path: 'saved', component: SavedComponent },
  { path: 'workout', component: WorkoutComponent },
  { path: 'progress', component: ProgressComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'excercises', component: ExercisesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
