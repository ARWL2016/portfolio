import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pinged } from '../types/pinged';

@Injectable({
  providedIn: 'root'
})
export class PingService {

  public pinged: Pinged = {
    primary: false,
    secondary: false
  };

  constructor(private http: HttpClient) { }

  public async postPing(type: string) {
    this.pinged[type] = true;

    try {
      await this.http.post('/ping', {type}).toPromise()
    } catch (err) {
      console.log('Heroku request error');
    }


  }
}
