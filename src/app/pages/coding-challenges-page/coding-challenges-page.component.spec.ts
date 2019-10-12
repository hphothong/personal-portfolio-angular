import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodingChallengesPageComponent } from './coding-challenges-page.component';
import { JumbotronComponent } from 'src/app/components/jumbotron/jumbotron.component';
import { GistsService } from 'src/app/services/github/gists.service';
import { HttpClientModule } from '@angular/common/http';

describe('CodingChallengesPageComponent', () => {
  let component: CodingChallengesPageComponent;
  let fixture: ComponentFixture<CodingChallengesPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [GistsService],
      imports: [HttpClientModule],
      declarations: [CodingChallengesPageComponent, JumbotronComponent]
    }).compileComponents();
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
