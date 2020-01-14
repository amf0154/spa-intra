import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  public get<T>(path: string, body?: object): Observable<T>{ 
    return this.http.get<T>(path, body)
  }
  public post<T>(path: string, body: object): Observable<T>{ 
    return this.http.post<T>(path, body)
  }
  public put<T>(path: string, body: object): Observable<T>{ 
    return this.http.put<T>(path, body)
  }
  public delete<T>(path: string, body?: object): Observable<T>{ 
    return this.http.delete<T>(path, body)
  }
}
