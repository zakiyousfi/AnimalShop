import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { petComponent } from './pet.component';

describe('petComponent', () => {
  let component: petComponent;
  let fixture: ComponentFixture<petComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ petComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(petComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
