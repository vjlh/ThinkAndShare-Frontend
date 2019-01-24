import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { MessageService } from '../message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { PostDesafio} from './desafio';

export interface Desafio {
  id: string;
  titulo: string;
  descripcion: string;
  inicio: string;
  termino: string;
}

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class DesafioService {
    private desafioUrl = 'http://127.0.0.1:8080/api/desafio';
    private desafiosUrl = 'http://127.0.0.1:8080/api/desafios';
    private apiUrl = 'http://127.0.0.1:8080/api';
    public idSeleccionada: string;

    constructor(
        private http: HttpClient,
        private messageService: MessageService) { }


    /** GET heroes from the server */
    getDesafios (): Observable<any> {
        return this.http.get('//localhost:8080/api/desafios');
    }

    /** desafio by id. Will 404 if id not found */
    getDesafio(id: String): Observable<Desafio> {
        const url = `${this.desafioUrl}/${id}`;

        return this.http.get<Desafio>(url); /*.pipe(catchError(<Desafio>(`getDesafio id=${id}`))
     );*/
    }
    public addDesafio (desafio: Desafio): Observable<Desafio> {
      return this.http.post<Desafio>(this.desafiosUrl, desafio);
    }

    public filter2(filtro:string): Observable<any> {
      const url = `${this.apiUrl}/desafios/filtrar/${filtro}`;
      return this.http.get(url);

    }
    public order2(criterio:string): Observable<any> {
      const url = `${this.apiUrl}/desafios/ordenar/${criterio}`;
      return this.http.get(url);

    }

    public getId(): string{
      return this.idSeleccionada;
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
