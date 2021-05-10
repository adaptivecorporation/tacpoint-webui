import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntrusionHomeComponent } from './intrusion-home.component';

describe('IntrusionHomeComponent', () => {
  let component: IntrusionHomeComponent;
  let fixture: ComponentFixture<IntrusionHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntrusionHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntrusionHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
