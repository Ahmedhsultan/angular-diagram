import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Civil3dComponent } from './civil3d.component';

describe('Civil3dComponent', () => {
  let component: Civil3dComponent;
  let fixture: ComponentFixture<Civil3dComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Civil3dComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Civil3dComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
