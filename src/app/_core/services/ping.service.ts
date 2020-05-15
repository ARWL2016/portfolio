import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PingService {

  private primary = false;
  private secondary = false;

  constructor(private http: HttpClient) { }

  public async ping(type: 'primary' | 'secondary') {

    if (this[type] === false) {
      try {
        // await this.http.post('/ping', {type}).toPromise();
        this[type] = true;
      } catch (err) {
        console.log('Heroku request error');
      }
    }


  }
}
