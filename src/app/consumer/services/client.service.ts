import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  ELEMENT_DATA = [
    {
      _id: 1,
      fullname: 'Lucia Fuentes Miranda',
      dni: 5343434,
      telephone: 77564666,
      actions: [
        {
          id: 100,
          code: 'L-223',
          direction: 'Av. Eiusmod mollit qui ullamco non consectetur anim.',
          price: 400,
        },
        {
          id: 101,
          code: 'L-224',
          direction:
            'Av. Duis ut dolor deserunt ex laborum laborum culpa cillum nostrud ipsum deserunt.',
          price: 400,
        },
      ],
    },
    {
      _id: 2,
      fullname: 'Mario Fernadez',
      dni: 5343434,
      telephone: 77564666,
      actions: [
        {
          id: 500,
          code: 'L-22A-2',
          direction:
            'Av.Deserunt commodo ad duis anim elit ullamco fugiat irure.',
          price: 400,
        },
      ],
    },
    {
      _id: 3,
      fullname: 'Tito Sanchez Rodriguez',
      dni: 5343434,
      telephone: 77564666,
      actions: [
        {
          id: 200,
          code: 'L-22A',
          direction:
            'Av. Irure eiusmod et minim duis reprehenderit nulla quis minim duis.',
          price: 400,
        },
      ],
    },
    {
      _id: 4,
      fullname: 'Juan Rojas Peredo',
      dni: 5343434,
      telephone: 77564666,
      actions: [
        {
          id: 4400,
          code: 'L-22M-2',
          direction: 'Av. Qui irure pariatur nisi qui.',
          price: 400,
        },
      ],
    },
  ];

  readings = [
    {
      code: 'L-22M-H',
      direction: 'Av. Qui irure pariatur nisi qui.',
      consumo: 70,
      date: new Date(),
    },
    {
      code: 'L-22M-A',
      direction:
        'Av. Aliqua nostrud nisi esse cillum proident ipsum nostrud culpa do qui enim.',
      consumo: 90,
      date: new Date(),
    },
    {
      code: 'L-22M-Q',
      direction:
        'Av. Non cillum ea duis adipisicing nulla minim eiusmod excepteur.',
      consumo: 120,
      date: new Date(),
    },
    {
      code: 'L-22M-e',
      direction: 'Av. Qui irure pariatur nisi qui.',
      consumo: 40,
      date: new Date(),
    },
    {
      code: 'RH-22M-2',
      direction: 'Av. Qui irure pariatur nisi qui.',
      consumo: 120,
      date: new Date(),
    },
    {
      code: 'A-22M-2',
      direction: 'Av. Qui irure pariatur nisi qui.',
      consumo: 90,
      date: new Date(),
    },
    {
      code: 'A-22M-2',
      direction: 'Av. Qui irure pariatur nisi qui.',
      consumo: 0,
      date: new Date(),
    },
    {
      code: 'LLL-22M-2',
      direction: 'Av. Qui irure pariatur nisi qui.',
      consumo: 1,
      date: new Date(),
    },
    {
      code: 'PLL-22M-2',
      direction: 'Av. Qui irure pariatur nisi qui.',
      consumo: 20,
      date: new Date(),
    },
  ];

  constructor() {}
}
