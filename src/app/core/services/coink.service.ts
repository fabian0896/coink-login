import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { EncryptService } from './encrypt.service';
import { Document } from 'src/app/models/document.model';
import { Gender } from 'src/app/models/gender.model';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CoinkService {
  apiUrl = environment.apiUrl;
  encriptKey = environment.encriptKey;

  FAKE_CODE = '1234';

  constructor(
    private encryptService: EncryptService,
    private http: HttpClient,
  ) { }

  sendSmsVerificationNumber(phoneNumber: string) {
    const serializeJson = JSON.stringify({
      phone_number: `57${phoneNumber}`,
      log_signup_id: '',
    });
    const encryptData = this.encryptService.encrypt(serializeJson, this.encriptKey);
    console.log(encryptData);
    return this.http.post(`${this.apiUrl}/sendSmsVerificationNumber`, {
      payload: encryptData,
    })
    .pipe(
      map(({ payload }: {payload: string}) => this.encryptService.decrypt(payload, this.encriptKey)),
    );
  }

  verifyCode(code: string) {
    return code === this.FAKE_CODE;
  }

  getDocumentTypes() {
    return this.http.get<Document[]>(`${this.apiUrl}/documentTypes`);
  }

  getGenders() {
    return this.http.get<Gender[]>(`${this.apiUrl}/genders`);
  }
}
