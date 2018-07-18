import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({ providedIn: 'root' })
export class DashboardService {

  
  private appUrl: string = 'api/';  // URL to web api

  constructor(
    private http: HttpClient) { }

    getHome (): Observable<any> {
      let URL = (this.appUrl + 'home').toString();
      return this.http.get<any>(URL)
          .pipe(
              catchError(this.handleError('get home', []))
          );
    }

    getChart (chartType: string): Observable<any> {
      let URL =  `${(this.appUrl + 'chart').toString()}/${chartType}`;
     
      return this.http.get<any>(URL)
          .pipe(
              catchError(this.handleError('get home', []))
          );
    }

      /** POST: add a new hero to the server */
    postDelivery (body: any): Observable<any> {
      let URL = (this.appUrl + 'delivery').toString();
      return this.http.post<any>(URL, body, httpOptions).pipe(
        tap(),
        catchError(this.handleError<any>())
      );
    }

  postRestaurantOpenClose(body: any): Observable<any> {
    let URL = (this.appUrl + 'restaurantStatus').toString();
    return this.http.post<any>(URL, body, httpOptions).pipe(
      tap(),
      catchError(this.handleError<any>())
    );
  }

  postDineInStatus(body: any):Observable<any> {
    let URL = (this.appUrl + 'reservationStatus').toString();
    return this.http.post<any>(URL, body, httpOptions).pipe(
      tap(),
      catchError(this.handleError<any>())
    );
  }

  getOrders (): Observable<any> {
    let URL = (this.appUrl + 'orders').toString();
    return this.http.get<any>(URL)
        .pipe(
            catchError(this.handleError('get home', []))
        );
  }

  
  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }


}
