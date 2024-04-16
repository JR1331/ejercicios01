import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjersComponent } from './ejers.component';

describe('EjersComponent', () => {
  let component: EjersComponent;
  let fixture: ComponentFixture<EjersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EjersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EjersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
