import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

 

  constructor(private http: HttpClient) { }



  postMethod():Observable<any>{
    let   headers = new HttpHeaders({
      'Content-Type':'application/json',
      'statusCode':'201'
    })

    let options = {headers:headers}
  
    let payload = {
      'id':1,
      'name':'John Kil'
    }

    return this.http.post<any>('https://jsonplaceholder.typicode.com/posts',payload,options)
  }


}
