import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChannelTrayComponent } from './channel-tray.component';

describe('ChannelTrayComponent', () => {
  let component: ChannelTrayComponent;
  let fixture: ComponentFixture<ChannelTrayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChannelTrayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChannelTrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
