import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecChannelsComponent } from './rec-channels.component';

describe('RecChannelsComponent', () => {
  let component: RecChannelsComponent;
  let fixture: ComponentFixture<RecChannelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecChannelsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecChannelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
