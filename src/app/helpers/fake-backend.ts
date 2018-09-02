import { Injectable } from '@angular/core';
import { HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { delay, mergeMap, materialize, dematerialize } from 'rxjs/operators';
import { HomeData, OrdersTableData, SalesChartData, OrdersChartData, FullMenuData, CateringMenuData, MenuTypes, Profile, ItemSummary,
         PromotionSummary, CustomerSummary, BillingSummary, BillingStatements, MenuCategories, Promotions,ZipcodeAnalysis
        } from './constants'

@Injectable()
export class FakeBackendInterceptor implements HttpInterceptor {

    constructor() { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let user = {
            id: 1,
            username: "demo",
            password: "demo"
        }
        // localStorage.setItem('user', JSON.stringify(user));

        // let loginUser = JSON.parse(localStorage.getItem('user')) || "";

        let users: any[] = JSON.parse(localStorage.getItem('users')) || [];
        users.push(user);
                localStorage.setItem('users', JSON.stringify(users));
        // array in local storage for registered users
        //let users: any[] = JSON.parse(localStorage.getItem('users')) || [];

        // wrap in delayed observable to simulate server api call
        return of(null).pipe(mergeMap(() => {

            if (request.url.endsWith('/users/authenticate') && request.method === 'POST') {
                // find if any user matches login credentials
                let filteredUsers = users.filter(user => {
                    return user.username === "demo" && user.password === "demo";
                });

                if (filteredUsers.length) {
                    // if login details are valid return 200 OK with user details and fake jwt token
                    let user = filteredUsers[0];
                    let body = {
                        id: user.id,
                        username: user.username,
                        firstName: user.firstName,
                        lastName: user.lastName,
                        token: 'fake-jwt-token'
                    };

                    return of(new HttpResponse({ status: 200, body: body }));
                } else {
                    // else return 400 bad request
                    return throwError({ error: { message: 'Username or password is incorrect' } });
                }
            }
            
            //////////////////////////////////////////// DAHBOARD ///////////////////////////////////

            if (request.url.endsWith('/home') && request.method === 'GET') {

                let data = HomeData;

                return of(new HttpResponse({ status: 200, body: data }));
            }

            /////////// order ///////////

            if (request.url.endsWith('/orders') && request.method === 'GET') {
                let data = OrdersTableData;

                return of(new HttpResponse({ status: 200, body: data }));
            }

            if (request.url.endsWith('/delivery') && request.method === 'POST') {
                // respond 200 OK
                return of(new HttpResponse({ status: 200 }));
            }
            
            
            if (request.url.endsWith('/restaurantStatus') && request.method === 'POST') {
                // respond 200 OK
                return of(new HttpResponse({ status: 200 }));
            }

            if (request.url.endsWith('/reservationStatus') && request.method === 'POST') {
                // respond 200 OK
                return of(new HttpResponse({ status: 200 }));
            }


            
            if (request.url.endsWith('/chart/Orders') && request.method === 'GET') {
                let data = OrdersChartData;
                
                return of(new HttpResponse({ status: 200, body: data }));
            }

            if (request.url.endsWith('/chart/Sales') && request.method === 'GET') {
                let data = SalesChartData;
                
                return of(new HttpResponse({ status: 200, body: data }));
            }

            if (request.url.endsWith('/menu/CateringMenu') && request.method === 'GET') {
                let data = CateringMenuData;
                
                return of(new HttpResponse({ status: 200, body: data }));
            }

            if (request.url.endsWith('/menu/FullMenu') && request.method === 'GET') {
                let data = FullMenuData;
                
                return of(new HttpResponse({ status: 200, body: data }));
            }

            if (request.url.endsWith('menu/menuTypes') && request.method === 'GET') {
                let data = MenuTypes;
                
                return of(new HttpResponse({ status: 200, body: data }));
            }

            if (request.url.endsWith('menu/menuCategories') && request.method === 'GET') {
                let data = MenuCategories;
                
                return of(new HttpResponse({ status: 200, body: data }));
            }

            if (request.url.endsWith('menu/promotions') && request.method === 'GET') {
                let data = Promotions;
                
                return of(new HttpResponse({ status: 200, body: data }));
            }

            if (request.url.endsWith('settings/profile') && request.method === 'GET') {
                let data = Profile;
                
                return of(new HttpResponse({ status: 200, body: data }));
            }            
  
            if (request.url.endsWith('reports/itemSummary') && request.method === 'GET') {
                let data = ItemSummary;
                
                return of(new HttpResponse({ status: 200, body: data }));
            }

            if (request.url.endsWith('reports/promotionSummary') && request.method === 'GET') {
                let data = PromotionSummary;
                
                return of(new HttpResponse({ status: 200, body: data }));
            }
            
            if (request.url.endsWith('reports/customerSummary') && request.method === 'GET') {
                let data = CustomerSummary;
                
                return of(new HttpResponse({ status: 200, body: data }));
            }

            if (request.url.endsWith('reports/zipcodeAnalysis') && request.method === 'GET') {
                let data = ZipcodeAnalysis;
                
                return of(new HttpResponse({ status: 200, body: data }));
            }

            if (request.url.endsWith('statements/billingSummary') && request.method === 'GET') {
                let data = BillingSummary;
                
                return of(new HttpResponse({ status: 200, body: data }));
            }
            
            if (request.url.endsWith('statements/billingStatements') && request.method === 'GET') {
                let data = BillingStatements;
                
                return of(new HttpResponse({ status: 200, body: data }));
            }


            // pass through any requests not handled above
            return next.handle(request);
            
        }))

        // call materialize and dematerialize to ensure delay even if an error is thrown (https://github.com/Reactive-Extensions/RxJS/issues/648)
        .pipe(materialize())
        .pipe(delay(500))
        .pipe(dematerialize());
    }
}

export let fakeBackendProvider = {
    // use fake backend in place of Http service for backend-less development
    provide: HTTP_INTERCEPTORS,
    useClass: FakeBackendInterceptor,
    multi: true
};