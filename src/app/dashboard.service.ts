import { Injectable, Output, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Search } from './search/search.model';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({ providedIn: 'root' })
export class DashboardService {

  
  private appUrl: string = 'api/';  // URL to web api

  constructor(private http: HttpClient) { }
  
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

  getOrders (search?: Search): Observable<any> {
    let URL = (this.appUrl + 'orders').toString();
    let searchParameters = null;

    if(search){
     searchParameters = new HttpParams({
            fromObject: {from: search.from, to:search.to, searchString: search.searchString}
        });
        
    }

      return this.http.get<any>(URL, { params: searchParameters })
      .pipe(
          catchError(this.handleError('get orders', []))
      );


  }

  getRegularHoursData (): Observable<any> {
   // let URL =  `${(this.appUrl + 'businessHours/regularHours').toString()}/${menuType}`;
   let URL = (this.appUrl + 'businessHours/regularHours').toString();

    return this.http.get<any>(URL)
        .pipe(
            catchError(this.handleError('get menu', []))
        );
  }

  getMenu (menuType: string): Observable<any> {
    let URL =  `${(this.appUrl + 'menu').toString()}/${menuType}`;

    return this.http.get<any>(URL)
        .pipe(
            catchError(this.handleError('get menu', []))
        );
  }

  getMenuTypes (): Observable<any> {
    let URL = (this.appUrl + 'menu/menuTypes').toString();

    return this.http.get<any>(URL)
        .pipe(
            catchError(this.handleError('get menu Types', []))
        );
  }

  getMenuCategoriesData (): Observable<any> {
    let URL = (this.appUrl + 'menu/menuCategories').toString();

    return this.http.get<any>(URL)
        .pipe(
            catchError(this.handleError('get menu categories', []))
        );
  }
  addMenuCategory(body: any): Observable<any> {
    let URL = (this.appUrl + 'menu/addCategory').toString();
    return this.http.post<any>(URL, body, httpOptions).pipe(
      tap(),
      catchError(this.handleError<any>())
    );
  }
  getPromotionsData (): Observable<any> {
    let URL = (this.appUrl + 'menu/promotions').toString();

    return this.http.get<any>(URL)
        .pipe(
            catchError(this.handleError('get menu promotions', []))
        );
  }

  getModifiersData(){
    let URL = (this.appUrl + 'menu/modifiers').toString();

    return this.http.get<any>(URL)
        .pipe(
            catchError(this.handleError('get modifiers', []))
        );
  }

  getProfile (): Observable<any> {
    let URL = (this.appUrl + 'settings/profile').toString();

    return this.http.get<any>(URL)
        .pipe(
            catchError(this.handleError('get settings profile ', []))
        );
  }

  getitemSummary (): Observable<any> {
    let URL = (this.appUrl + 'reports/itemSummary').toString();

    return this.http.get<any>(URL)
        .pipe(
            catchError(this.handleError('get reports item summary ', []))
        );
  }

  getPromotionSummary (): Observable<any> {
    let URL = (this.appUrl + 'reports/promotionSummary').toString();

    return this.http.get<any>(URL)
        .pipe(
            catchError(this.handleError('get reports item summary ', []))
        );
  }

  getCustomerSummary (): Observable<any> {
    let URL = (this.appUrl + 'reports/customerSummary').toString();

    return this.http.get<any>(URL)
        .pipe(
            catchError(this.handleError('get reports item summary ', []))
        );
  }

  getZipcodeChartData (): Observable<any> {
    let URL = (this.appUrl + 'reports/zipcodeAnalysis').toString();

    return this.http.get<any>(URL)
        .pipe(
            catchError(this.handleError('get reports item summary ', []))
        );
  }
  
  getBillingSummary (search? :Search): Observable<any> {
    let URL = (this.appUrl + 'statements/billingSummary').toString();
    let searchParameters = null;

    if(search){
     searchParameters = new HttpParams({
            fromObject: {from: search.from, to:search.to, searchString: search.searchString}
        });
    }
    return this.http.get<any>(URL, { params: searchParameters })
        .pipe(
            catchError(this.handleError('get reports item summary ', []))
        );
  }

  getBillingStatements (search? :Search): Observable<any> {
    let URL = (this.appUrl + 'statements/billingStatements').toString();
    let searchParameters = null;

    if(search){
     searchParameters = new HttpParams({
            fromObject: {from: search.from, to:search.to, searchString: search.searchString}
        });
    }
    return this.http.get<any>(URL, { params: searchParameters })
        .pipe(
            catchError(this.handleError('get reports item summary ', []))
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
