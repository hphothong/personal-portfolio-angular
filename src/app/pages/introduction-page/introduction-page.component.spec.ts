import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroductionPageComponent } from './introduction-page.component';
import { JumbotronComponent } from 'src/app/components/jumbotron/jumbotron.component';

describe('IntroductionPageComponent', () => {
  let component: IntroductionPageComponent;
  let fixture: ComponentFixture<IntroductionPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [IntroductionPageComponent, JumbotronComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntroductionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
