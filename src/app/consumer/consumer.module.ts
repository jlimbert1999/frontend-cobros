import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConsumerRoutingModule } from './consumer-routing.module';
import { ClientsComponent } from './screens/clients/clients.component';
import { MaterialModule } from '../material/material.module';
import { ActionsComponent } from './screens/actions/actions.component';
import { ReadingsComponent } from './screens/readings/readings.component';
import { PaymentsComponent } from './screens/payments/payments.component';
import { RegisterReadingComponent } from './dialogs/register-reading/register-reading.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ClientsComponent,
    ActionsComponent,
    ReadingsComponent,
    PaymentsComponent,
    RegisterReadingComponent,
  ],
  imports: [
    CommonModule,
    ConsumerRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
  ],
})
export class ConsumerModule {}
