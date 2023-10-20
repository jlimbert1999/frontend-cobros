import { Component } from '@angular/core';
import { ClientService } from '../../services/client.service';

@Component({
  selector: 'app-readings',
  templateUrl: './readings.component.html',
  styleUrls: ['./readings.component.scss'],
})
export class ReadingsComponent {
  dataSource: any[] = [];
  displayedColumns: string[] = ['code', 'direction', 'quantity', 'date'];
  constructor(private readonly clientService: ClientService) {
    this.dataSource = clientService.readings;
  }
}
