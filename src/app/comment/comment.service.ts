import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

@Injectable()
export class CommentService {
  private baseUrl = 'https://jsonplaceholder.typicode.com/comments';
  constructor(private http: Http) { }
  getComments(): Observable<any[]> {
    return this.http.get(this.baseUrl)
      .map((response: Response) => response.json());
  }
  getComment(id: number) {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get(url)
      .map((response: Response) => response.json());
  }
  private handleError(error: Response): Observable<any> {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }
  private extractData(response: Response) {
    const body = response.json();
    return body.data || {};
  }
}
