export class SetClass {
  public weight: any;
  public reps: any;
  public isDone: boolean;

  constructor(weight: any, reps: any, isDone: boolean = false) {
    this.weight = weight;
    this.reps = reps;
    this.isDone = isDone;
  }
}
