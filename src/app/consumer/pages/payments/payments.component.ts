import { Component, Inject, OnInit, signal, computed } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { action, reading } from '../../interfaces';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.scss'],
})
export class PaymentsComponent implements OnInit {
  monto: number = 12;
  debts: reading[] = [];
  selectedDebts = signal<reading[]>([]);
  total = computed<number>(() => {
    return this.selectedDebts().reduce(
      (acc, current) => (acc = acc + current.consume * this.monto),
      0
    );
  });

  constructor(
    private readonly clientService: ClientService,
    @Inject(MAT_DIALOG_DATA) public data: action,
    public dialogRef: MatDialogRef<PaymentsComponent>
  ) {}
  ngOnInit(): void {
    this.getDebts();
  }

  getDebts() {
    this.clientService.getAcionDebts(this.data._id).subscribe((resp) => {
      this.debts = resp;
    });
  }

  pay() {
    const readingsIds = this.selectedDebts().map((debt) => debt._id);
    this.clientService
      .payDebts(readingsIds)
      .subscribe((resp) => console.log(resp));
  }

  selectionChange(ids: string[] | null) {
    if (!ids) return;
    const selected = this.debts.filter((debt) => ids.includes(debt._id));
    this.selectedDebts.set(selected);
  }
}
