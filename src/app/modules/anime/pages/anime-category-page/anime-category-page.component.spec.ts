import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimeCategoryPageComponent } from './anime-category-page.component';

describe('AnimeCategoryPageComponent', () => {
  let component: AnimeCategoryPageComponent;
  let fixture: ComponentFixture<AnimeCategoryPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnimeCategoryPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AnimeCategoryPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
