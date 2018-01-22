import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Pinged } from './pinged';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class PingService {
  public pinged: Pinged = {
    primary: false,
    secondary: false
  };

  constructor(private http: Http) { }

  public postPing(type: string) {
    this.pinged[type] = true;

    return this.http.post('/ping', {type})
      .toPromise()
      .then(res => {
        console.log(res);
      })
      .catch(e => {
        console.log('Heroku request error');
      });
  }
}
