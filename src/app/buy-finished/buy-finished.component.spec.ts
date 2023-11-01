import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyFinishedComponent } from './buy-finished.component';

describe('BuyFinishedComponent', () => {
  let component: BuyFinishedComponent;
  let fixture: ComponentFixture<BuyFinishedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BuyFinishedComponent]
    });
    fixture = TestBed.createComponent(BuyFinishedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
