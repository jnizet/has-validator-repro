import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'has-validator-repro';
  userForm: FormGroup;
  min3 = Validators.minLength(3);

  constructor(private formBuilder: FormBuilder) {
    this.userForm = this.formBuilder.group({
      orgId: null,
      name: [null, [Validators.required, this.min3, Validators.maxLength(30)]],
    });
  }

  get orgIdCtrl(): AbstractControl { return this.userForm.get('orgId')!; }
  get nameCtrl(): AbstractControl { return this.userForm.get('name')!; }
}
