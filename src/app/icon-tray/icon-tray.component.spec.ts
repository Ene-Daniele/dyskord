import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconTrayComponent } from './icon-tray.component';

describe('IconTrayComponent', () => {
  let component: IconTrayComponent;
  let fixture: ComponentFixture<IconTrayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconTrayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IconTrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
