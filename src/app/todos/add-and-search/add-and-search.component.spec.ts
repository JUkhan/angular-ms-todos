import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAndSearchComponent } from './add-and-search.component';

describe('AddAndSearchComponent', () => {
  let component: AddAndSearchComponent;
  let fixture: ComponentFixture<AddAndSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAndSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAndSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
