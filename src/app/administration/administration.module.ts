import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimengModule } from '../primeng/primeng.module';
import { PaymentConfigComponent } from './pages/payment-config/payment-config.component';
import { FormsModule } from '@angular/forms';
import { AdministrationRoutingModule } from './administration-routing.module';

@NgModule({
  declarations: [PaymentConfigComponent],
  imports: [
    CommonModule,
    AdministrationRoutingModule,
    PrimengModule,
    FormsModule,
  ],
})
export class AdministrationModule {}
