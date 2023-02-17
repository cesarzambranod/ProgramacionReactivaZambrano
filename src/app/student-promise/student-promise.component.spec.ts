import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentPromiseComponent } from './student-promise.component';

describe('StudentPromiseComponent', () => {
  let component: StudentPromiseComponent;
  let fixture: ComponentFixture<StudentPromiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentPromiseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentPromiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
