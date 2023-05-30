import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppDsgvoComponent } from './app-dsgvo.component';

describe('AppDsgvoComponent', () => {
  let component: AppDsgvoComponent;
  let fixture: ComponentFixture<AppDsgvoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppDsgvoComponent]
    });
    fixture = TestBed.createComponent(AppDsgvoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
