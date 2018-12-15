import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayYouBankComponent } from './pay-you-bank.component';

describe('PayYouBankComponent', () => {
  let component: PayYouBankComponent;
  let fixture: ComponentFixture<PayYouBankComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayYouBankComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayYouBankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
