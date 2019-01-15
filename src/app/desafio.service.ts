import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Desafio } from './desafio';

import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class DesafioService {
    private desafiosUrl = 'http://127.0.0.1:8080/api/desafio';

    constructor(
        private http: HttpClient,
        private messageService: MessageService) { }


    /** GET heroes from the server */
    getDesafios (): Observable<any> {
        return this.http.get('//localhost:8080/api/desafios');
    }

    /** AQUI ESTA EL ERROR, FALLA EN EL CRUD GET desafio by id. Will 404 if id not found */
    getDesafio(id: String): Observable<Desafio> {
        const url = `${this.desafiosUrl}/${id}`;

        return this.http.get<Desafio>(url); /*.pipe(catchError(<Desafio>(`getDesafio id=${id}`))
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
        this.messageService.add('DesafioService: ' + message);
    }
}
