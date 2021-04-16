import { Injectable } from '@angular/core';
import {
    HttpInterceptor,
    HttpRequest,
    HttpResponse, 
    HttpHandler,
    HttpEvent,
    HttpErrorResponse,
    HttpHeaders
} from '@angular/common/http';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { LocalStorageService } from '../services/local-storage.service';

@Injectable()
export class HttpConfigInterceptor implements HttpInterceptor {
    constructor(private router: Router, private localStorageService: LocalStorageService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {


        if (request.url.includes('/auth/login')) {
            return next.handle(request);
            
        }
        if (request.url.includes('/auth/register')) {
            return next.handle(request);
        }

        
        const token: string = JSON.parse(localStorage.getItem('token'));
        
       
        if (token) {
            // console.log(request,'check interceptors==========')
            request = request.clone({ headers: new HttpHeaders({
                'Cache-Control': 'no-cache',
                'Pragma': 'no-cache',
                'Expires': 'Sat, 01 Jan 2000 00:00:00 GMT',
                'x-access-token': token
            }) });
        }

        

        if (!request.headers.has('Content-Type') && !request.url.includes('/file/upload')) {
            request = request.clone({ headers: request.headers.set('enctype', 'multipart/form-data') });
        }

        request = request.clone({ headers: request.headers.set('Accept', 'application/json') });

        // request = request.clone({ headers: request.headers.set('Authorization', 'Basic YXBpOmRlN2YyYzgyNjNiMmU5MDkxMTA5YzFmM2ZlZWI0MWEz') });

        return next.handle(request).pipe(
            map((event: HttpEvent<any>) => {
                if (event instanceof HttpResponse) {
                    
                    // if (event.status === 401 || event.status === 403) {
                    //     Swal.fire(
                    //         'Your session has expired',
                    //         '"Please login again',
                    //         'error'
                    //     );
                    //     this.router.navigateByUrl('/auth/login');
                    // }
                }
                return event;
            }));
    }
}