import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-client',
  templateUrl: './register-client.component.html',
  styleUrl: './register-client.component.scss',
})
export class RegisterClientComponent {
  private _fb = inject(FormBuilder);

  FormClient: FormGroup = this._fb.group({
    fistname: ['', [Validators.required]],
    lastname: ['', [Validators.required]],
    middlename: ['', [Validators.required]],
    dni: ['', [Validators.required]],
    phone: ['', [Validators.required]],
  });

  // searchAvailabele()

  save() {}
}
