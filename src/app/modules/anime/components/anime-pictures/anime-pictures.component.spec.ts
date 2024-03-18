import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimePicturesComponent } from './anime-pictures.component';

describe('AnimePicturesComponent', () => {
  let component: AnimePicturesComponent;
  let fixture: ComponentFixture<AnimePicturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnimePicturesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AnimePicturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
