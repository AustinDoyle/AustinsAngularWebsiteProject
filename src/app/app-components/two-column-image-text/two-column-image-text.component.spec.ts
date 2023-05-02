import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoColumnImageTextComponent } from './two-column-image-text.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-test-host',
  template: `
    <app-two-column-image-text>
      <p>Hello, world!</p>
    </app-two-column-image-text>
  `,
})
class TestHostComponent {}

describe('TwoColumnImageTextComponent', () => {
  let component: TwoColumnImageTextComponent;
  let fixture: ComponentFixture<TwoColumnImageTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TwoColumnImageTextComponent, TestHostComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TwoColumnImageTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should bind imageUrl to img src attribute', () => {
    const imageUrl = 'https://example.com/image.jpg';
    component.imageUrl = imageUrl;
    fixture.detectChanges();
  
    const compiled = fixture.nativeElement;
    const img = compiled.querySelector('img');
  
    expect(img.getAttribute('src')).toBe(imageUrl);
  });

  it('should render projected content', () => {
    const hostFixture = TestBed.createComponent(TestHostComponent);
    hostFixture.detectChanges();
  
    const compiled = hostFixture.nativeElement;
    const cols = compiled.querySelectorAll('.col-md-6');
    expect(cols[1].innerHTML).toContain('<p>Hello, world!</p>');
  });
});
