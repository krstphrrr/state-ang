
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap, map, catchError, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class HttpClientService{
  constructor(private httpClient:HttpClient){ }

  public get<T>(url:string, options?:{}):Observable<T>{
    return this.httpClient
    .get<T>(url,options)
    .pipe(
      delay(2000),
      map((response:T) => {
        return response
      }),
      catchError((error) => {
        console.error(error)
        throw error
      })
    )
  }
}