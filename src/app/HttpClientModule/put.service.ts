import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PutService {

  constructor(private http:HttpClient) { }

  putMethod(id:number):Observable<any>{
    let payload = {
      title:'angular is best'
    }
    // return this.http.put<any>('http://localhost:3000/Simple_Json/Sumit_02',payload)
    return this.http.put<any>(`https://jsonplaceholder.typicode.com/posts/${id}`,payload)
 
  }
}
