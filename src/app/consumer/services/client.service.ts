import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { CreateActionDto, CreateClientDto, CreateReadingDto } from '../dto';
import { environment } from 'src/environments/environment.development';
import { action, client, reading } from '../interfaces';

const baseUrl = environment.baseUrl;
@Injectable({
  providedIn: 'root',
})
export class ClientService {
  private http = inject(HttpClient);

  addAction(action: CreateActionDto) {
    return this.http.post<action>(`${baseUrl}/consumer/action`, action);
  }

  addClient(client: CreateClientDto) {
    return this.http.post<client>(`${baseUrl}/consumer/client`, client);
  }

  addReading(reading: CreateReadingDto) {
    return this.http.post<{ message: string }>(
      `${baseUrl}/consumer/reading`,
      reading
    );
  }

  searchAvailableActions(text: string) {
    return this.http.get<action[]>(
      `${baseUrl}/consumer/actions/search/${text}`
    );
  }

  getClients() {
    return this.http.get<client[]>(`${baseUrl}/consumer/clients`);
  }

  getLastConsumptionRecord(id_action: string) {
    return this.http.get<reading>(
      `${baseUrl}/consumer/record/last/${id_action}`
    );
  }

  getAcionDebts(id_action: string) {
    return this.http.get<reading[]>(`${baseUrl}/consumer/debts/${id_action}`);
  }

  payDebts(readingsIds: string[]) {
    return this.http.put(`${baseUrl}/consumer/pay/debts`, {
      readingsIds,
    });
  }
}
