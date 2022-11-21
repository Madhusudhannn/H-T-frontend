import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavequestionsComponent } from './savequestions.component';

describe('SavequestionsComponent', () => {
  let component: SavequestionsComponent;
  let fixture: ComponentFixture<SavequestionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SavequestionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SavequestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
