import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminMenuComponentComponent } from './admin-menu-component.component';

describe('AdminMenuComponentComponent', () => {
  let component: AdminMenuComponentComponent;
  let fixture: ComponentFixture<AdminMenuComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminMenuComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminMenuComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
