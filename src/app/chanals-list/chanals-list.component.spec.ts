import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChanalsListComponent } from './chanals-list.component';

describe('ChanalsListComponent', () => {
  let component: ChanalsListComponent;
  let fixture: ComponentFixture<ChanalsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChanalsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChanalsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
