import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  apiUrl: string = "http://localhost:3000/characters";
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private httpClient: HttpClient) { }

  // Get list of items
  list(): Observable<any> {
    return this.httpClient.get(this.apiUrl).pipe(
      catchError(this.handleError)
    );
  }

  //Handle errors
  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error ocurred:', error.error.message)
    } else {
      console.error(
        `Backend  returned code ${error.status},
        body was: ${error.error}`
      )
    }
    return throwError(() => new Error('Something bad happened, pls try again later.'));
  }
}
