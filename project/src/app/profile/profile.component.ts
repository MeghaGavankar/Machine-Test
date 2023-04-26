import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Subscriber } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup } from '@angular/forms';
import { UserService } from '../user.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  mydata:any;
  myresult:any;
  final:any;
 
  constructor(private userService:UserService,private http: HttpClient,private route:Router){
    this.getData();
  }

  editing=new FormGroup({
   firstname: new FormControl(),
   lastname: new FormControl(),
   email: new FormControl(),
    mobile:new FormControl(),
   age:new FormControl(),
   state:new FormControl(),
    country:new FormControl(),
    homeadd:new FormControl(),
    comadd:new FormControl(),
  tags:new FormControl(),
   profile:new FormControl(),
  
   })   
   
   userid:any;
EditUser(id:any){
  this.userid=id;
  this.http.get<any>("http://localhost:3000/user").subscribe(res=>{
  const user=res.find((a:any)=>{
    return a.id==this.userid;
  });
  if(user){
alert("edit now...");
this.editing.controls.username.setValue(user.username);
this.editing.controls.email.setValue(user.email);
 
 this.editing.controls.edu.setValue(user.edu);
  }
  else{
    alert(" values not available!!!");
  }
  });
}

editData(final:any)
{
  this.editing.controls.email.setValue(final.email);
}

Update(){
  this.userService.UpdateUser(this.editing.value,this.final.id).subscribe(res=>{
alert("Updated successfully...")
  });
}


getData()
    {
     
         return this.http.get("http://localhost:3000/users/").subscribe(res=>{
            this.mydata=res;
            this.myresult=Object.keys(this.mydata).length;
            this.http.get("http://localhost:3000/users/"+this.myresult).subscribe(res=>{
                this.final=res;
            });
         });
    }

    url:any;
    onSelectFile(event:any) {
      if (event.target.files && event.target.files[0]) {
        var reader = new FileReader();
  
        reader.readAsDataURL(event.target.files[0]); // read file as data url
  
        reader.onload = (event) => { // called once readAsDataURL is completed
          this.url = event.target?.result;
        }
      }
    }
    
     
    
}
