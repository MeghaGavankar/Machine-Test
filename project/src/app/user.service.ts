import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
 

  constructor(private http:HttpClient) {}

  url="http://localhost:3000/users";

  saveUser(data:any){
    return this.http.post(this.url,data);

  }

  getuser(){
    return this.http.get(this.url);
   }

   UpdateUser(data:any,id:any){
    return this.http.put("http://localhost:3000/users/"+id,data);
  }
  

  UploadImage(){
    
  }

  
}
