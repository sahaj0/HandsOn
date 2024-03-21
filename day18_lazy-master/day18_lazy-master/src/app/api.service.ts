import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
    // apiUrl is http://localhost:3000
    private apiUrl : string =' http://localhost:3000';
    //injected http client
    constructor(private http: HttpClient) {}
   
    // add a get method to the service that takes an endpoint and returns an observable
    get(endpoint: string): Observable<any> {
      return this.http.get('${this.apiUrl}/${endpoint}');
    }
}
