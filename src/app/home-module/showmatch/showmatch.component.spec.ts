import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowmatchComponent } from './showmatch.component';

describe('ShowmatchComponent', () => {
  let component: ShowmatchComponent;
  let fixture: ComponentFixture<ShowmatchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowmatchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowmatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
