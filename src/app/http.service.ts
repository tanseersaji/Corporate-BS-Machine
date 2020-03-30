import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  async getBS(){
    return await this.http.get("https://corporatebs-generator.sameerkumar.website/").toPromise().then(data => {
      return data
    })
  }

}
