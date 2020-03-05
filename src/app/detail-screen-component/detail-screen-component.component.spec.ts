import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailScreenComponentComponent } from './detail-screen-component.component';

describe('DetailScreenComponentComponent', () => {
  let component: DetailScreenComponentComponent;
  let fixture: ComponentFixture<DetailScreenComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailScreenComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailScreenComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
