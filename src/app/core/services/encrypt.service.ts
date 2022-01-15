import { Injectable } from '@angular/core';

import CryptoJs from 'crypto-js';
import TripleDes from 'crypto-js/tripledes';
import EncHex from 'crypto-js/enc-hex';
import Md5 from 'crypto-js/md5';


@Injectable({
  providedIn: 'root'
})
export class EncryptService {

  constructor() { }

  encrypt(serializedJson: string, key: string) {
  const encryptedArray = CryptoJs.enc.Utf8.parse(serializedJson);
  const keyHash = this.getKeyHash(key);
  const payload = TripleDes.encrypt(encryptedArray, keyHash, { mode: CryptoJs.mode.ECB, padding: CryptoJs.pad.Pkcs7 });
  return payload.ciphertext.toString(CryptoJs.enc.Base64);
  }

  decrypt(payload: string, key: string) {
  const encryptedArray = CryptoJs.enc.Base64.parse(payload);
  const keyHash = this.getKeyHash(key);
  // @ts-ignore
  const serializedJson = TripleDes.decrypt({ ciphertext: encryptedArray }, keyHash, { mode: CryptoJs.mode.ECB,
 padding: CryptoJs.pad.Pkcs7 });
  return serializedJson.toString(CryptoJs.enc.Utf8);
  }

  getKeyHash(key: string) {
  let securityKeyArray = Md5(key).toString();
  securityKeyArray += securityKeyArray.substring(0, 16);
  return EncHex.parse(securityKeyArray);
  }
}
