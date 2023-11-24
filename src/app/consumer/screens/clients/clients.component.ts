import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../services/client.service';
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';
import { MatDialog } from '@angular/material/dialog';
import { createInvoice } from 'src/app/shared/helpers/pdf/invoice';
import { PaymentsComponent } from '../../pages/payments/payments.component';
import { RegisterClientComponent } from '../../pages/register-client/register-client.component';
import { RegisterActionComponent } from '../../pages/register-action/register-action.component';
import { RegisterReadingComponent } from '../../pages/register-reading/register-reading.component';
import { action, client } from '../../interfaces';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition(
        'expanded <=> collapsed',
        animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')
      ),
    ]),
  ],
})
export class ClientsComponent implements OnInit {
  columnsToDisplay = [
    'firstname',
    'lastname',
    'middlename',
    'dni',
    'phone',
    'options',
    'expand',
  ];
  dataSource: client[] = [];
  expandedElement: any | null;
  constructor(
    private readonly clientService: ClientService,
    public dialog: MatDialog
  ) {}
  ngOnInit(): void {
    this.getClients();
  }

  addClient() {
    const dialogRef = this.dialog.open(RegisterClientComponent);
    dialogRef.afterClosed().subscribe((client: client) => {
      if (client) {
        createInvoice(client);
        this.dataSource = [client, ...this.dataSource];
      }
    });
  }

  addAction() {
    const dialogRef = this.dialog.open(RegisterActionComponent);
  }

  addReading(action: action) {
    const dialogRef = this.dialog.open(RegisterReadingComponent, {
      data: action,
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.getClients();
      }
    });
  }

  payments(action: action) {
    const dialogRef = this.dialog.open(PaymentsComponent, {
      data: action,
      width: '800px',
    });
  }

  getClients() {
    this.clientService.getClients().subscribe((data) => {
      this.dataSource = data;
    });
  }

  generateInvoice(client: client) {
    createInvoice(client);
  }
}
