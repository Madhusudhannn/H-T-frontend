import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogInrouteComponent } from './log-inroute.component';

describe('LogInrouteComponent', () => {
  let component: LogInrouteComponent;
  let fixture: ComponentFixture<LogInrouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogInrouteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogInrouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
