import { Component, Inject, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClientService } from '../../services/client.service';
import { CreateActionDto } from '../../dto';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { action } from '../../interfaces';

@Component({
  selector: 'app-register-action',
  templateUrl: './register-action.component.html',
  styleUrl: './register-action.component.scss',
})
export class RegisterActionComponent implements OnInit {
  private _fb = inject(FormBuilder);
  private _clientService = inject(ClientService);
  FormAction: FormGroup = this._fb.group({
    address: ['', [Validators.required]],
    cost: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
    code: ['', [Validators.required]],
  });
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: action | undefined,
    public dialogRef: MatDialogRef<RegisterActionComponent>
  ) {}
  ngOnInit(): void {
    if (this.data) {
      this.FormAction.patchValue(this.data);
    }
  }

  closeDialog() {
    this.dialogRef.close('Pizza!');
  }

  save() {
    const action = CreateActionDto.fromFormGroup(this.FormAction.value);
    this._clientService.addAction(action).subscribe((resp) => {
      this.dialogRef.close(resp);
    });
  }
}
