import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Email {
  email: string;
  message: string;
  subject?: string;
}

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(private http: HttpClient) { }

  public sendEmail(email: Email): Promise<any> {

    const url = 'https://formspree.io/alistairrwillis@gmail.com';
    return this.http.post(url, email)
      .toPromise();
  }

}
