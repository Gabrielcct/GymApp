import { Component, OnInit } from '@angular/core';
enum EXCERCISES_TYPE {
  chest,
  back,
  legs,
}

class Excercise {
  public id: string;
  public name: string;
  public type: EXCERCISES_TYPE;

  constructor(id: string, name: string, type: EXCERCISES_TYPE) {
    this.id = id;
    this.name = name;
    this.type = type;
  }
}

@Component({
  selector: 'app-exercises',
  templateUrl: './exercises.component.html',
  styleUrls: ['./exercises.component.css'],
})
export class ExercisesComponent implements OnInit {
  public exercises: Array<any> = [];
  constructor() {}

  ngOnInit() {
    this.exercises = this.createExercises();
    console.log(this.exercises);
  }

  addExcercises(item: any): void {}

  createExercises(): Array<any> {
    return [
      {
        type: 'Chest',
        exercises: [
          new Excercise('bench-press', 'Bench press', EXCERCISES_TYPE.chest),
          new Excercise(
            'barbell-bench',
            'Barbell press',
            EXCERCISES_TYPE.chest
          ),
          new Excercise('dumbbell-fly', 'Dumbbell fly', EXCERCISES_TYPE.chest),
        ],
      },
      {
        type: 'Back',
        exercises: [
          new Excercise('lat-pulldown', 'Lat pulldown', EXCERCISES_TYPE.back),
          new Excercise(
            'seated-cable-row',
            'Seated cable row',
            EXCERCISES_TYPE.back
          ),
          new Excercise('TBar-row', 'TBar row', EXCERCISES_TYPE.back),
        ],
      },
      {
        type: 'Legs',
        exercises: [
          new Excercise('calf-rise', 'Calf Rise', EXCERCISES_TYPE.legs),
          new Excercise('deadlift', 'Deadlift', EXCERCISES_TYPE.legs),
          new Excercise('sumo-deadlift', 'Sumo deadlift', EXCERCISES_TYPE.legs),
        ],
      },
    ];
  }
}
