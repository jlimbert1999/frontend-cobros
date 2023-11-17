import { Component } from '@angular/core';
import { ClientService } from '../../services/client.service';
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';
import { MatDialog } from '@angular/material/dialog';
import { RegisterClientComponent } from '../../pages/register-client/register-client.component';
import { RegisterActionComponent } from '../../pages/register-action/register-action.component';

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
export class ClientsComponent {
  columnsToDisplay: string[] = ['fullname', 'dni', 'telephone', 'options'];
  dataSource: any[] = [];
  columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand'];
  expandedElement: any | null;
  constructor(
    private readonly clientService: ClientService,
    public dialog: MatDialog
  ) {

  }

  addClient() {
    const dialogRef = this.dialog.open(RegisterClientComponent);
  }

  addAction() {
    const dialogRef = this.dialog.open(RegisterActionComponent);
  }
}
