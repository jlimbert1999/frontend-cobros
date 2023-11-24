import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ConsumerRoutingModule } from './consumer-routing.module';
import { ClientsComponent } from './screens/clients/clients.component';
import { MaterialModule } from '../material/material.module';
import { ActionsComponent } from './screens/actions/actions.component';
import { ReadingsComponent } from './screens/readings/readings.component';
import { PaymentsComponent } from './pages/payments/payments.component';
import { RegisterReadingComponent } from './pages/register-reading/register-reading.component';
import { RegisterClientComponent } from './pages/register-client/register-client.component';
import { RegisterActionComponent } from './pages/register-action/register-action.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ClientsComponent,
    ActionsComponent,
    ReadingsComponent,
    PaymentsComponent,
    RegisterReadingComponent,
    RegisterClientComponent,
    RegisterActionComponent,
  ],
  imports: [
    CommonModule,
    ConsumerRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule
  ],
})
export class ConsumerModule {}
