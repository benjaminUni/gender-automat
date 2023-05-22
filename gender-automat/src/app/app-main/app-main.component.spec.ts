import { AppMainComponent } from './app-main.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';


describe('AppLandingpageComponent', () => {
  let component: AppMainComponent;
  let fixture: ComponentFixture<AppMainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppMainComponent]
    });
    fixture = TestBed.createComponent(AppMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
