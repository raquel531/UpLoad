import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecArticleComponent } from './rec-article.component';

describe('RecArticleComponent', () => {
  let component: RecArticleComponent;
  let fixture: ComponentFixture<RecArticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecArticleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
