import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolbarComponent } from './toolbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('ToolbarComponent', () => {
  let component: ToolbarComponent;
  let fixture: ComponentFixture<ToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ToolbarComponent],
      imports: [BrowserAnimationsModule]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have toolbar logo containing Austin Doyle', () => {
    const element = fixture.debugElement.nativeElement.querySelector('.toolbar__logo');
    expect(element.innerHTML).toBe(component['logoName']);
  })

  it('should have the correct subheader', () => {
    const element = fixture.debugElement.nativeElement.querySelector('.toolbar__subheader');
    expect(element.innerHTML).toBe(component['subheaderName']);
  });

  it('should have the correct headers for links', () => {
    const elements = fixture.debugElement.nativeElement.querySelectorAll('.toolbar__nav a');
    elements.forEach((element, index) => {
      expect(element.innerHTML).toBe(component.navItems[index].label)
    });
  });

  it('should have the correct links', () => {
    const elements = fixture.debugElement.nativeElement.querySelectorAll('.toolbar__nav a');
    elements.forEach((element, index) => {
      let elementRef = element.getAttribute('href');
      expect(elementRef).toBe(component.navItems[index].url)
    });
  });
});
