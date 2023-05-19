import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavedWorkoutsComponent } from './saved-workouts.component';

describe('SavedWorkoutsComponent', () => {
  let component: SavedWorkoutsComponent;
  let fixture: ComponentFixture<SavedWorkoutsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SavedWorkoutsComponent]
    });
    fixture = TestBed.createComponent(SavedWorkoutsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
