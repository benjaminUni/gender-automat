import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppLandingpageComponent } from './app-landingpage.component';

describe('AppLandingpageComponent', () => {
  let component: AppLandingpageComponent;
  let fixture: ComponentFixture<AppLandingpageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppLandingpageComponent]
    });
    fixture = TestBed.createComponent(AppLandingpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
