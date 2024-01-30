import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiselComponent } from './multisel.component';

describe('MultiselComponent', () => {
  let component: MultiselComponent;
  let fixture: ComponentFixture<MultiselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MultiselComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MultiselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
