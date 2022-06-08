import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageLandingComponent } from './image-landing.component';

describe('ImageLandingComponent', () => {
  let component: ImageLandingComponent;
  let fixture: ComponentFixture<ImageLandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImageLandingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
