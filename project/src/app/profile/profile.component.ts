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
    profile:new FormControl(),
   firstname: new FormControl(),
   lastname: new FormControl(),
   email: new FormControl(),
    mobile:new FormControl(),
   age:new FormControl(),
   state:new FormControl(),
    country:new FormControl(),
   address:new FormControl(),
    
  tags:new FormControl(),

  
   })   
   
<<<<<<< HEAD

editData(final:any)
{ 
  this.editing.controls.firstname.setValue(final.firstname);
  this.editing.controls.lastname.setValue(final.lastname);
  this.editing.controls.email.setValue(final.email);
  this.editing.controls.mobile.setValue(final.mobile);
  this.editing.controls.age.setValue(final.age);
  this.editing.controls.state.setValue(final.state);
  this.editing.controls.country.setValue(final.country);
  this.editing.controls.address.setValue(final.address);
  this.editing.controls.tags.setValue(final.tags);
  
  
}
=======
   userid:any;
EditData(final:any){
  this.userid=final.id;
  this.http.get<any>("http://localhost:3000/user").subscribe(res=>{
  const user=res.find((a:any)=>{
    return a.id==this.userid;
  });
  if(final){
alert("edit now...");
this.editing.controls.firstname.setValue(final.firstname);
this.editing.controls.lastname.setValue(final.lastname);
this.editing.controls.email.setValue(final.email);
this.editing.controls.mobile.setValue(final.mobile);
this.editing.controls.age.setValue(final.age);
this.editing.controls.state.setValue(final.state);
this.editing.controls.country.setValue(final.country);
this.editing.controls.homeadd.setValue(final.homeadd);
this.editing.controls.comadd.setValue(final.comadd);
this.editing.controls.tags.setValue(final.tags);
  }
  else{
    alert(" values not available!!!");
  }
  });
}


>>>>>>> 62f051fb2e833e570cd54f5ddee99400f9ab36f6

get firstname()
    {
     return this.editing.get('firstname');
    }



Update(){
  this.userService.UpdateUser(this.editing.value,this.final.id).subscribe(res=>{
alert("Updated successfully...")
this.editing.reset();

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
