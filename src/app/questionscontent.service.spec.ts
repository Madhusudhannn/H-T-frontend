import { TestBed } from '@angular/core/testing';

import { questionscontent } from './questionscontent.service';

describe('QuestionscontentService', () => {
  let service: questionscontent;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(questionscontent);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
