import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveAnswersComponent } from './save-answers.component';

describe('SaveAnswersComponent', () => {
  let component: SaveAnswersComponent;
  let fixture: ComponentFixture<SaveAnswersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaveAnswersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaveAnswersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
