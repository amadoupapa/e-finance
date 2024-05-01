import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeblocageComponent } from './deblocage.component';

describe('DeblocageComponent', () => {
  let component: DeblocageComponent;
  let fixture: ComponentFixture<DeblocageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeblocageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeblocageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
