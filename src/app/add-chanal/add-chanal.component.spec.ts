import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddChanalComponent } from './add-chanal.component';

describe('AddChanalComponent', () => {
  let component: AddChanalComponent;
  let fixture: ComponentFixture<AddChanalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddChanalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddChanalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
