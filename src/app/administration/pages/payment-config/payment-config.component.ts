import { ChangeDetectionStrategy, Component, type OnInit } from '@angular/core';

@Component({
  selector: 'app-payment-config',
  templateUrl: './payment-config.component.html',
  styleUrl: './payment-config.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaymentConfigComponent implements OnInit {
  value1: number = 20;

  value2: number = 10.5;

  value3: number = 25;
  ngOnInit(): void {}
}
