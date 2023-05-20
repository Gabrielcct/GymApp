export class WorkoutClass {
  public name: string;
  public excercises: Array<any>;

  constructor(name: string, excercises: Array<any>) {
    this.name = name;
    this.excercises = excercises;
  }
}
