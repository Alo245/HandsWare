import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainP } from './main-p';

describe('MainP', () => {
  let component: MainP;
  let fixture: ComponentFixture<MainP>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainP]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainP);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
