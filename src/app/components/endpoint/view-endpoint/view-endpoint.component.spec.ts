import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewEndpointComponent } from './view-endpoint.component';

describe('ViewEndpointComponent', () => {
  let component: ViewEndpointComponent;
  let fixture: ComponentFixture<ViewEndpointComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewEndpointComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewEndpointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
