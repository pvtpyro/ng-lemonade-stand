import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lemonade } from './lemonade';

describe('Lemonade', () => {
  let component: Lemonade;
  let fixture: ComponentFixture<Lemonade>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lemonade]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Lemonade);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
