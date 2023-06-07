import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppExamplesGridlayoutComponent } from './app-examples-gridlayout.component';

describe('AppExamplesGridlayoutComponent', () => {
  let component: AppExamplesGridlayoutComponent;
  let fixture: ComponentFixture<AppExamplesGridlayoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppExamplesGridlayoutComponent]
    });
    fixture = TestBed.createComponent(AppExamplesGridlayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
