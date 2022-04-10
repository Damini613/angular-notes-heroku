import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpSerService {

  constructor(private http:HttpClient) { }

  getMethod(){
   return this.http.get('https://jsonplaceholder.typicode.com/posts')
  //  return this.http.get('http://localhost:3000/Simple_Json')
  }

  getMethodId(id:number){
    return this.http.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
  }
}
