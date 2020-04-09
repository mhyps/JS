import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTasksHeaderComponent } from './add-tasks-header.component';

describe('AddTasksHeaderComponent', () => {
  let component: AddTasksHeaderComponent;
  let fixture: ComponentFixture<AddTasksHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddTasksHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTasksHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
