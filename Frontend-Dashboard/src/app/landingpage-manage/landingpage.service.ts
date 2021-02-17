import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class LandingpageService {

  readonly APIUrl = "https://localhost:44347/api";
  constructor(private http:HttpClient) { }

  getLandingpageJavaList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/landingpagejava');
  }

  addLandingpageJava(val:any){
    return this.http.post(this.APIUrl+'/landingpagejava',val);
  }

  updateLandingpageJava(val:any){
    return this.http.put(this.APIUrl+'/landingpagejava',val);
  }

  deleteLandingpageJava(val:any){
    return this.http.delete(this.APIUrl+'/landingpagejava/'+val);
  }



  getLandingpageAspList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/landingpageasp');
  }

  addLandingpageAsp(val:any){
    return this.http.post(this.APIUrl+'/landingpagejava',val);
  }

  updateLandingpageAsp(val:any){
    return this.http.put(this.APIUrl+'/landingpageasp',val);
  }

  deleteLandingpageAsp(val:any){
    return this.http.delete(this.APIUrl+'/landingpageasp/'+val);
  }



  getLandingpagePhpList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/landingpagephp');
  }

  addLandingpagePhp(val:any){
    return this.http.post(this.APIUrl+'/landingpagephp',val);
  }

  updateLandingpagePhp(val:any){
    return this.http.put(this.APIUrl+'/landingpagephp',val);
  }

  deleteLandingpagePhp(val:any){
    return this.http.delete(this.APIUrl+'/landingpagephp/'+val);
  }



  getLandingpageMobiList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/landingpagemobi');
  }

  addLandingpageMobi(val:any){
    return this.http.post(this.APIUrl+'/landingpagemobi',val);
  }

  updateLandingpageMobi(val:any){
    return this.http.put(this.APIUrl+'/landingpagemobi',val);
  }

  deleteLandingpageMobi(val:any){
    return this.http.delete(this.APIUrl+'/landingpagemobi/'+val);
  }

}
