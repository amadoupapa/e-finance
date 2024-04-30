import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnulerFormComponent } from './annuler-form.component';

describe('AnnulerFormComponent', () => {
  let component: AnnulerFormComponent;
  let fixture: ComponentFixture<AnnulerFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnnulerFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AnnulerFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
