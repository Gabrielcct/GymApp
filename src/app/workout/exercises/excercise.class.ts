import { SetClass } from '../sets/set.class';

export enum EXCERCISES_TYPE {
  chest,
  back,
  legs,
}

export class Excercise {
  public id: string;
  public name: string;
  public type: EXCERCISES_TYPE;
  public sets: Array<SetClass>;

  constructor(
    id: string,
    name: string,
    type: EXCERCISES_TYPE,
    sets?: Array<SetClass>
  ) {
    this.id = id;
    this.name = name;
    this.type = type;
    this.sets = sets || [];
  }
}
