import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DeleteService {

  constructor(private http:HttpClient) { }

  deleteMethod(id:number){
    return this.http.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
  }
}
