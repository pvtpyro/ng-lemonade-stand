import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Liquid } from './liquid';

describe('Liquid', () => {
  let component: Liquid;
  let fixture: ComponentFixture<Liquid>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Liquid]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Liquid);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
