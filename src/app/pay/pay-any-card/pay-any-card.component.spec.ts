import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayAnyCardComponent } from './pay-any-card.component';

describe('PayAnyCardComponent', () => {
  let component: PayAnyCardComponent;
  let fixture: ComponentFixture<PayAnyCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayAnyCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayAnyCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
