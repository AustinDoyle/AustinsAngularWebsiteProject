import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoColumnImageTextComponent } from './two-column-image-text.component';

describe('TwoColumnImageTextComponent', () => {
  let component: TwoColumnImageTextComponent;
  let fixture: ComponentFixture<TwoColumnImageTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwoColumnImageTextComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TwoColumnImageTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
