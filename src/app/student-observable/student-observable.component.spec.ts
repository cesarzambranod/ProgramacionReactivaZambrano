import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentObservableComponent } from './student-observable.component';

describe('StudentObservableComponent', () => {
  let component: StudentObservableComponent;
  let fixture: ComponentFixture<StudentObservableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentObservableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentObservableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
