import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoColumnTextComponent } from './two-column-text.component';

describe('TwoColumnTextComponent', () => {
  let component: TwoColumnTextComponent;
  let fixture: ComponentFixture<TwoColumnTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwoColumnTextComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TwoColumnTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
