import { Component, inject } from '@angular/core';

import { FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-main',
  templateUrl: './app-main.component.html',
  styleUrls: ['./app-main.component.css']
})
export class AppMainComponent {
  private fb = inject(FormBuilder);
  textForm = this.fb.group({
    textField: [null, Validators.required],
  });

  onSubmit(): void {
    alert('Wir prüfen den von Ihnen eingegebenen Text.');
  }
}
