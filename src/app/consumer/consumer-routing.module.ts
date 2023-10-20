import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientsComponent } from './screens/clients/clients.component';
import { ReadingsComponent } from './screens/readings/readings.component';
import { PaymentsComponent } from './screens/payments/payments.component';

const routes: Routes = [
  { path: '', component: ClientsComponent },
  { path: 'lecturas', component: ReadingsComponent },
  { path: 'pagos', component: PaymentsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConsumerRoutingModule {}
