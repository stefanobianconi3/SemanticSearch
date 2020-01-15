import { Injectable, Output, EventEmitter } from '@angular/core';
import { ServerLocation } from '../classes/ServerLocation';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
  })

  export class DataService {
    private APIURL = ServerLocation.URL+'api';
    private headers;
    constructor(private router: Router, private http: HttpClient) {
        this.headers = new HttpHeaders()
    }

    //getSample() {
      //  return this.http.get(this.APIURL+"/", { headers: this.headers });
      //}

    getDBpedia(body){
      return this.http.post(this.APIURL+"/dbpedia", body,this.headers);
    }

    getFileResult(body){
      return this.http.post(this.APIURL+"/file",body, this.headers)
    }
  }
