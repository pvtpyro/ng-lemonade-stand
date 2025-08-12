import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Glass } from './glass';

describe('Glass', () => {
  let component: Glass;
  let fixture: ComponentFixture<Glass>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Glass]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Glass);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
