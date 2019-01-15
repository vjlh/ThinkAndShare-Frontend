import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Idea } from './idea';

import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class IdeaService {
  private ideasUrl = 'http://127.0.0.1:8080/api/idea';

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }


  /** GET heroes from the server */
  getIdeas (): Observable<any> {
    return this.http.get('//localhost:8080/api/ideas');
  }

  /** AQUI ESTA EL ERROR, FALLA EN EL CRUD GET idea by id. Will 404 if id not found */
  getIdea(id: String): Observable<Idea> {
    const url = `${this.ideasUrl}/${id}`;
    
    return this.http.get<Idea>(url); /*.pipe(catchError(<Idea>(`getIdea id=${id}`))
     );*/
    
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add('IdeaService: ' + message);
  }
}
