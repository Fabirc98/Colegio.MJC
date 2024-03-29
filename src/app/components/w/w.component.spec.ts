import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WComponent } from './w.component';

describe('WComponent', () => {
  let component: WComponent;
  let fixture: ComponentFixture<WComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
