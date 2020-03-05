import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DramaScreenComponent } from './drama-screen.component';

describe('DramaScreenComponent', () => {
  let component: DramaScreenComponent;
  let fixture: ComponentFixture<DramaScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DramaScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DramaScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
