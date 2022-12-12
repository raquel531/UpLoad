import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThematicpageComponent } from './thematicpage.component';

describe('ThematicpageComponent', () => {
  let component: ThematicpageComponent;
  let fixture: ComponentFixture<ThematicpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThematicpageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThematicpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
