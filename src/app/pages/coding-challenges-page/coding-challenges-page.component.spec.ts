import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodingChallengesPageComponent } from './coding-challenges-page.component';

describe('CodingChallengesPageComponent', () => {
  let component: CodingChallengesPageComponent;
  let fixture: ComponentFixture<CodingChallengesPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodingChallengesPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodingChallengesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
