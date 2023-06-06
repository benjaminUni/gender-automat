import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppInfopageComponent } from './app-infopage.component';

describe('AppLandingpageComponent', () => {
  let component: AppInfopageComponent;
  let fixture: ComponentFixture<AppInfopageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppInfopageComponent]
    });
    fixture = TestBed.createComponent(AppInfopageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
