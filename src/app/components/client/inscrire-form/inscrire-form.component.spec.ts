import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InscrireFormComponent } from './inscrire-form.component';

describe('InscrireFormComponent', () => {
  let component: InscrireFormComponent;
  let fixture: ComponentFixture<InscrireFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InscrireFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InscrireFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
