import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AveplanComponent } from './aveplan.component';

describe('AveplanComponent', () => {
  let component: AveplanComponent;
  let fixture: ComponentFixture<AveplanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AveplanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AveplanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
