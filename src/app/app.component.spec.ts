import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { ReactiveFormsModule, Validators } from '@angular/forms';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [ReactiveFormsModule]
    }).compileComponents();
  });

  it('form control check for validators', () => {
    const component: AppComponent = TestBed.createComponent(AppComponent).componentInstance;
    expect(component.orgIdCtrl.hasValidator(Validators.required)).toBeFalse();

    const nameCtrl = component.nameCtrl;
    expect(nameCtrl.hasValidator(Validators.required)).toBeTruthy();
    expect(nameCtrl.hasValidator(component.min3)).toBeTruthy();
  });
});
