import { Component } from '@angular/core';
import { ClientService } from '../../services/client.service';

@Component({
  selector: 'app-register-reading',
  templateUrl: './register-reading.component.html',
  styleUrls: ['./register-reading.component.scss'],
})
export class RegisterReadingComponent {
  actions: any[] = [];
  currentRecordDate = new Date();
  lastRecordDate?: Date;
  lastValue: number = 0;
  constructor(private clientService: ClientService) {
    this.actions = this.clientService.ELEMENT_DATA.map((el) => el.actions).flat(
      1
    );
  }
  selectAction() {
    this.lastRecordDate = new Date(
      this.currentRecordDate.getFullYear(),
      this.currentRecordDate.getMonth() - 1,
      Math.random() * (30 - 1) + 1
    );
    this.lastValue = Math.floor(Math.random() * (200 - 50) + 50);
  }
}
