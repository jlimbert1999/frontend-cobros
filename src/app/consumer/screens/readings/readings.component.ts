import { Component } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { MatDialog } from '@angular/material/dialog';
import { RegisterReadingComponent } from '../../dialogs/register-reading/register-reading.component';

@Component({
  selector: 'app-readings',
  templateUrl: './readings.component.html',
  styleUrls: ['./readings.component.scss'],
})
export class ReadingsComponent {
  dataSource: any[] = [];
  displayedColumns: string[] = ['code', 'direction', 'quantity', 'date'];
  constructor(
    private readonly clientService: ClientService,
    public dialog: MatDialog
  ) {
    this.dataSource = clientService.readings;
  }

  openDialog() {
    const dialogRef = this.dialog.open(RegisterReadingComponent, {
      width: '800px',
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
