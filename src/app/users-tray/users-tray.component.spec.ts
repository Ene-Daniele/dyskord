import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersTrayComponent } from './users-tray.component';

describe('UsersTrayComponent', () => {
  let component: UsersTrayComponent;
  let fixture: ComponentFixture<UsersTrayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersTrayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsersTrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
