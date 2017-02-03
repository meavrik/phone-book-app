import { Injectable } from '@angular/core';
import { Http, Response,RequestOptionsArgs }   from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs';

class Client {

}


@Injectable()
export class ClientsService {

  private ClientsUrl = 'http://localhost:27017/';  // URL to web API



  constructor (private http: Http) {

  }


  getClients (): Observable<any[]> {
    return this.http.get(this.ClientsUrl)
                    .map(this.extractData)
                    .catch(this.handleError);
  }
  private extractData(res: Response) {
    let body = res.json();
    console.log("complete!!!"+body.length)
    return body || [];
  }

  private handleError (error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

}
