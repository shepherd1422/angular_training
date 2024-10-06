import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterMedComponent } from './footer-med.component';

describe('FooterMedComponent', () => {
  let component: FooterMedComponent;
  let fixture: ComponentFixture<FooterMedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterMedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FooterMedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
