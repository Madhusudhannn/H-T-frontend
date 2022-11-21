import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RquestionComponent } from './rquestion.component';

describe('RquestionComponent', () => {
  let component: RquestionComponent;
  let fixture: ComponentFixture<RquestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RquestionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RquestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
