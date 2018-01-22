import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Email } from 'app/email/email';

@Injectable()
export class EmailService {

  constructor(private http: Http) { }

  public sendEmail(email: Email): Promise<any> {

    const url = 'https://formspree.io/alistairrwillis@gmail.com';
    return this.http.post(url, email)
      .toPromise();
  }

}
