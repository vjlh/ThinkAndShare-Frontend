import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

export interface Idea {
  titulo: string;
  descripcion: string;
  nombreIdeador: string;
  idDesafio: number;
}
export interface Comentario{
  nombreIdeador: string;
  comentario: string;
}
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class IdeaService {
  private ideaUrl = 'http://127.0.0.1:8080/api/idea';
  private ideasUrl = 'http://127.0.0.1:8080/api/ideas';
  private apiUrl = 'http://127.0.0.1:8080/api';
  private pliz = 'localhost:8080/api/5c3e4da9bf1b3e0eafe8d040/comentar';

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }


  /** GET heroes from the server */
  getIdeas (): Observable<any> {
    return this.http.get('//localhost:8080/api/ideas');
  }

  /** idea by id. Will 404 if id not found */
  getIdea(id: String): Observable<Idea> {
    const url = `${this.ideaUrl}/${id}`;
    
    return this.http.get<Idea>(url); /*.pipe(catchError(<Idea>(`getIdea id=${id}`))
     );*/
  }
  public addIdea (idea: Idea): Observable<Idea> {
    return this.http.post<Idea>(this.ideasUrl, idea);
  }
  
  public addComentario(comentario: Comentario,id:string): Observable<Idea>{
    const url = `${this.apiUrl}/${id}/comentar`;
    return this.http.post<Idea>(url,comentario);
  }

  public meGusta(id:string): Observable<Idea>{
    const url = `${this.apiUrl}/${id}/megusta`;
    return this.http.post<Idea>(url,httpOptions);

  }
  public filter(filtro:string): Observable<any> {
    const url = `${this.apiUrl}/ideas/filtrar/${filtro}`;
    return this.http.get(url);    

  }
  public order(criterio:string): Observable<any> {
    const url = `${this.apiUrl}/ideas/ordenar/${criterio}`;
    return this.http.get(url);    

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
