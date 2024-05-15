import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimeCategoriesComponent } from './anime-categories.component';

describe('AnimeCategoriesComponent', () => {
  let component: AnimeCategoriesComponent;
  let fixture: ComponentFixture<AnimeCategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnimeCategoriesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AnimeCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
