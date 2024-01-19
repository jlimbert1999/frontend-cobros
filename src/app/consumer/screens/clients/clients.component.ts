import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { MatDialog } from '@angular/material/dialog';
import { createInvoice } from 'src/app/shared/helpers/pdf/invoice';
import { PaymentsComponent } from '../../pages/payments/payments.component';
import { RegisterClientComponent } from '../../pages/register-client/register-client.component';
import { RegisterActionComponent } from '../../pages/register-action/register-action.component';
import { RegisterReadingComponent } from '../../pages/register-reading/register-reading.component';
import { action, client } from '../../interfaces';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss'],
})
export class ClientsComponent implements OnInit {
  items: MenuItem[] | undefined;

  constructor(
    private readonly clientService: ClientService,
    public dialog: MatDialog
  ) {}
  ngOnInit(): void {
    this.getClients();
    this.items = [
      {
        label: 'Update',
        icon: 'pi pi-refresh',
      },
      {
        label: 'Delete',
        icon: 'pi pi-times',
      },
    ];
  }

  addClient() {
   
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
      // this.dataSource = data;
    });
  }

  generateInvoice(client: client) {
    createInvoice(client);
  }
}
