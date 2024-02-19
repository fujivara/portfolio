import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class EmailService {

  constructor (private http: HttpClient) {}

  sendMessage (email: string, message: string): Observable<any> {
    return this.http.post('https://emmeail.netlify.app/api/mail-me', {
      email,
      message,
    });
  }
}
