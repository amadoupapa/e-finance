import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlocageComponent } from './blocage.component';

describe('BlocageComponent', () => {
  let component: BlocageComponent;
  let fixture: ComponentFixture<BlocageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlocageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BlocageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
