import { Component } from '@angular/core';
import { ClientService } from '../../services/client.service';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
interface payments {
  name: string;
  value: number;
}

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.scss'],
})
export class PaymentsComponent {
  paymets: any[] = [];
  text: string;
  total: number = 0;
  todo: payments[] = [
    {
      name: 'Lectura: 20 en 20/9/23',
      value: 20,
    },
    {
      name: 'Lectura: 50 en 18/7/23',
      value: 50,
    },
    {
      name: 'Lectura: 10 en 28/5/23',
      value: 10,
    },
    {
      name: 'Lectura: 70 en 9/4/23',
      value: 70,
    },
    {
      name: 'Lectura: 20 en 5/3/23',
      value: 20,
    },
    {
      name: 'Lectura: 5 en 22/2/23',
      value: 5,
    },
  ];

  done: payments[] = [];
  clients: any[] = [];

  constructor(private readonly clientService: ClientService) {
  
  }

  drop(event: CdkDragDrop<payments[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
    this.selectClient();
  }
  selectClient() {
    this.total = this.done.reduce((previos, { value }) => previos + value, 0);
  }
}
