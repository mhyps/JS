import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormHttpComponent } from './form-http.component';

describe('FormHttpComponent', () => {
  let component: FormHttpComponent;
  let fixture: ComponentFixture<FormHttpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormHttpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormHttpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
