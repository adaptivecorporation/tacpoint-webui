import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntrusionViewHostComponent } from './intrusion-view-host.component';

describe('IntrusionViewHostComponent', () => {
  let component: IntrusionViewHostComponent;
  let fixture: ComponentFixture<IntrusionViewHostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntrusionViewHostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntrusionViewHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
