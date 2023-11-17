import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { CreateActionDto } from '../dto';
import { environment } from 'src/environments/environment.development';
import { action } from '../interfaces';

const baseUrl = environment.baseUrl;
@Injectable({
  providedIn: 'root',
})
export class ClientService {
  private http = inject(HttpClient);

  addAction(action: CreateActionDto) {
    return this.http.post<action>(`${baseUrl}/consumer/action`, action);
  }

  searchAvailableActions(text: string) {
    return this.http.get<action>(`${baseUrl}/actions/search/${text}`);
  }
}
