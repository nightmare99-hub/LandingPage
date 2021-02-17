import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  readonly APIURL = "https://localhost:44347/api"

  constructor(private http:HttpClient) { }

  getLandingpageJavaList():Observable<any[]>{
    return this.http.get<any>(this.APIURL+'/landingpagephp');
  }

  addSupport(val:any){
    return this.http.post(this.APIURL+'/landingpagephp',val);
  }

}
