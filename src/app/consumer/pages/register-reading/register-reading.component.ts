import { Component, Inject, OnInit, signal } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ClientService } from '../../services/client.service';
import { action, reading } from '../../interfaces';
import { FormBuilder, Validators } from '@angular/forms';
import { CreateReadingDto } from '../../dto';

@Component({
  selector: 'app-register-reading',
  templateUrl: './register-reading.component.html',
  styleUrls: ['./register-reading.component.scss'],
})
export class RegisterReadingComponent implements OnInit {
  lastConsumptionRecord = signal<reading | undefined>(undefined);
  formReading = this.fb.group({
    consume: ['', [Validators.required]],
    consumptionDate: [new Date(), Validators.required],
  });

  constructor(
    private fb: FormBuilder,
    private clientService: ClientService,
    public dialogRef: MatDialogRef<RegisterReadingComponent>,
    @Inject(MAT_DIALOG_DATA) public data: action
  ) {}
  ngOnInit(): void {
    this.clientService
      .getLastConsumptionRecord(this.data._id)
      .subscribe((resp) => this.lastConsumptionRecord.set(resp));
  }

  save() {
    const reading = CreateReadingDto.fromForm(
      this.data._id,
      this.formReading.value
    );
    this.clientService.addReading(reading).subscribe((resp) => {
      this.dialogRef.close();
    });
  }
}
