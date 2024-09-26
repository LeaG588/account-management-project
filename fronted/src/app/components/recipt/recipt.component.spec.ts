import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceiptComponent } from './recipt.component';
import { CommonModule } from '@angular/common';

describe('ReciptComponent', () => {
  let component: ReceiptComponent;
  let fixture: ComponentFixture<ReceiptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReceiptComponent,CommonModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReceiptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
