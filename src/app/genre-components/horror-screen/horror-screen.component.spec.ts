import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HorrorScreenComponent } from './horror-screen.component';

describe('HorrorScreenComponent', () => {
  let component: HorrorScreenComponent;
  let fixture: ComponentFixture<HorrorScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HorrorScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HorrorScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
