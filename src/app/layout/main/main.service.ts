import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, throwError } from 'rxjs'; // async await promise
import { catchError } from 'rxjs/operators';

import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MainService {
  private mainUrl: string;
  constructor(private http: HttpClient) {
    this.mainUrl = 'http://localhost:3000';
  }

  public toQueryString(url: string, params: any) {
    let newUrl = `${url}?`;

    for (const [key, value] of Object.entries(params)) {
      if (value !== undefined) {
        newUrl += `${key}=${value}&`;
      }
    }

    return newUrl;
  }

  protected handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.

      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.

      // The response body may contain clues as to what went wrong,

      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }

    // return an observable with a user-facing error message

    return throwError('Something bad happened; please try again later.');
  }

  public getData(params: any): Observable<any> {
    const url = this.toQueryString(this.mainUrl, params);

    return this.http
      .get<any>(url)

      .pipe(catchError(this.handleError));
  }
}
