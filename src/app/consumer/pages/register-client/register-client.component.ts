import { Component, Inject, computed, signal } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClientService } from '../../services/client.service';
import { action } from '../../interfaces';
import { MatSelectSearchData } from 'src/app/shared/interfaces';
import { CreateClientDto } from '../../dto';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-register-client',
  templateUrl: './register-client.component.html',
  styleUrl: './register-client.component.scss',
})
export class RegisterClientComponent {
  availableActions = signal<action[]>([]);
  selectedActions = signal<action[]>([]);
  matSelectOptions = computed<MatSelectSearchData<action>[]>(() => {
    return this.availableActions().map((type) => ({
      text: `${type.code} - ${type.address}`,
      value: type,
    }));
  });
  constructor(
    private fb: FormBuilder,
    private clientService: ClientService,
    public dialogRef: MatDialogRef<RegisterClientComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  FormClient: FormGroup = this.fb.group({
    firstname: ['', [Validators.required]],
    lastname: ['', [Validators.required]],
    middlename: [''],
    dni: ['', [Validators.required]],
    phone: ['', [Validators.required]],
  });

  save() {
    if (this.FormClient.invalid) return;
    const client = CreateClientDto.fromFormGroup(
      this.FormClient.value,
      this.selectedActions()
    );
    this.clientService.addClient(client).subscribe((resp) => {
      this.dialogRef.close(resp);
    });
  }

  searchActions(text: string) {
    this.clientService
      .searchAvailableActions(text)
      .subscribe((resp) => this.availableActions.set(resp));
  }
  selectAction(action: action) {
    if (this.selectedActions().some((element) => element._id === action._id)) {
      return;
    }
    this.selectedActions.update((actions) => [action, ...actions]);
  }
}
