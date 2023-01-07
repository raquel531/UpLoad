import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TagvideosComponent } from './tagvideos.component';

describe('TagvideosComponent', () => {
  let component: TagvideosComponent;
  let fixture: ComponentFixture<TagvideosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TagvideosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TagvideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
