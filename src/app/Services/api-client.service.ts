import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

/* 
  this service reponsible for send http request.
*/
@Injectable({
  providedIn: 'root',
})
export class ApiClientService {
  private apiUrl: string;
  constructor(private http: HttpClient) {
    this.apiUrl = environment.apiUrl;
  }

  createCompleteRoute(route: string): string {
    const middlePath =
      this.apiUrl.split('').pop() !== '/' && route !== null && route[0] !== '/'
        ? '/'
        : '';
    return `${this.apiUrl}${middlePath}${route}`;
  }

  generateHeaders(isFormData = false): { headers: HttpHeaders } {
    return {
      headers: this.getHeaders(isFormData),
    };
  }

  private getHeaders(isFormData: boolean): HttpHeaders {
    const _headers = {};
    if (!isFormData) _headers['Content-Type'] = 'application/json';
    return new HttpHeaders(_headers);
  }

  public get(route: string): Observable<any> {
    return this.http.get(
      this.createCompleteRoute(route),
      this.generateHeaders()
    );
  }

  public create(route: string, body: any): Observable<any> {
    return this.http.post(
      this.createCompleteRoute(route),
      body,
      this.generateHeaders()
    );
  }

  public update(route: string, body: any): Observable<any> {
    return this.http.put(
      this.createCompleteRoute(route),
      body,
      this.generateHeaders()
    );
  }

  public delete(route: string): Observable<any> {
    return this.http.delete(
      this.createCompleteRoute(route),
      this.generateHeaders()
    );
  }
}
