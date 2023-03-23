import { Component, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { AdminService } from 'src/app/_services/admin.service';
import { passcheck } from '../password.validator';

@Component({
  selector: 'app-add-edit-admin',
  templateUrl: './add-edit-admin.component.html',
  styleUrls: ['./add-edit-admin.component.scss']
})
export class AddEditAdminComponent implements OnInit {
  roleList:string[]=['Super Admin','Admin']
  id:number;
  title:string;
  adminForm:FormGroup

  
  // private _passData: string;

  // public set passData(v : string) {
  //   this._passData = v;
  // }
  

   get passchecker() : boolean {
   return this.adminForm.getError('mismatch')
  }
  // @ViewChild('pass') pass:HTMLInputElement
  
  // passchecker(){
  //   let val=this.pass.value
  //   passcheck(val)
  // }

  constructor(private activatedroute:ActivatedRoute,
    // private fb:FormGroup,
    private adminService:AdminService,
    private route:Router) { 
    this.adminForm=new FormGroup({
      userName: new FormControl('',[Validators.required]),
      userEmail: new FormControl('',[Validators.required]),
      contactNumber: new FormControl('',[Validators.required]),
      password: new FormControl('',[Validators.required]),
      confirmPassword: new FormControl('',[Validators.required]),
      adminRole: new FormControl('',[Validators.required])
    },passcheck)

    activatedroute.queryParamMap.subscribe((params)=>{
      this.id = parseInt(params.get('serialno'))
      if(this.id)
      {
        this.title='Edit';
        this.getAdminDetail()
      }
      else{
        this.title='Add';
      }
    })

  }

  ngOnInit(): void {
console.log()
  }

  getAdminDetail(){
    this.adminService.getAdminDetails(this.id).subscribe((res)=>{
      console.log(res[0])
      this.adminForm.patchValue({
        userName:res[0].username,
        userEmail:res[0].email,
        contactNumber:res[0].contactNumber,
        password:res[0].password,
        confirmPassword:res[0].confirmPassword,
        adminRole:res[0].role
    })
    })
    }

  submit() {
    let payload = {
      username: this.adminForm.controls['userName'].value,
      email: this.adminForm.controls['userEmail'].value,
      contactNumber:this.adminForm.controls['contactNumber'].value,
      password:this.adminForm.controls['password'].value,
      confirmPassword:this.adminForm.controls['confirmPassword'].value,
      role:this.adminForm.controls['adminRole'].value
    };
    // console.log(data)
    this.id?this.submitEditedDetails(payload):this.submitDetails(payload)
   
  }


submitEditedDetails(recievedValue:any){
let newPayload= Object.assign({},recievedValue)
this.adminService.submitEditedAdminDetail(newPayload,this.id).subscribe((res)=>{
 if(res)
 this.route.navigate(['/roleandpermission/adminlist']);
})
}

submitDetails(recievedValue:any){
  let newPayload= Object.assign({},recievedValue)
  this.adminService
  .submitAdminDetail(newPayload)
  .subscribe((res) => {
    if (res) {
      this.route.navigate(['/roleandpermission/adminlist']);
    }
  });
}

}
