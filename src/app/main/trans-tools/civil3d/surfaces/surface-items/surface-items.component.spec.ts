import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurfaceItemsComponent } from './surface-items.component';

describe('SurfaceItemsComponent', () => {
  let component: SurfaceItemsComponent;
  let fixture: ComponentFixture<SurfaceItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SurfaceItemsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SurfaceItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
