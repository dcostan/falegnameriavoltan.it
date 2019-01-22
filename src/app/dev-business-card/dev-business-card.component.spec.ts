import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevBusinessCardComponent } from './dev-business-card.component';

describe('DevBusinessCardComponent', () => {
  let component: DevBusinessCardComponent;
  let fixture: ComponentFixture<DevBusinessCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevBusinessCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevBusinessCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
