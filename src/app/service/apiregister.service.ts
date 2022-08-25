import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';
import { User } from '../user';
import { Observable } from 'rxjs';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { DataServer } from '../data'

@Injectable({
  providedIn: 'root'
})
export class ApiregisterService {
  BASE_URL = 'http://localhost:3000/register'
  constructor(private http: HttpClient, 
    private messageService: MessageService,
    private sanitizer: DomSanitizer,) { }

  postProduct(data: any): Observable<DataServer>  {
    return this.http.post<DataServer>(`${this.BASE_URL}`, data);
  }

  getProduct(): Observable<User[]> {
    return this.http.get<User[]>(`${this.BASE_URL}`);
  }

  putProduct(data: any, id: number): Observable<DataServer> {
    return this.http.put<DataServer>(`${this.BASE_URL}/${id}`, data);
  }

  deleteProduct(id: string| undefined): Observable<DataServer> {
    return this.http.delete<DataServer>(`${this.BASE_URL}/${id}`);
  }
  
  displayMessage(summary: string, detail: string, severity: string = 'success') {
    this.messageService.add({ severity, summary, detail })
  }
}
