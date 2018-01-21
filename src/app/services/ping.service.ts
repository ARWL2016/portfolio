import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class PingService {
  public pinged = false;

  constructor(private http: Http) { }

  public pingProject() {
    this.pinged = true;
    console.log('pinging...');
    return this.http.get('https://pathfinder-2017.herokuapp.com')
      .toPromise()
      .then((res) => console.log(res))
      .catch(e => console.log(e));

  }

}
